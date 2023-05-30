<template>
  <article v-if="selectedTherapy">
    <nav>
      <h2>{{ selectedTherapy.name }}</h2>
      <div>
        <button @click="goPrev">Prev</button>
        <button @click="goNext">Next</button>
      </div>
    </nav>

    <section class="table-container">
      <h3>
        Meta data
      </h3>
      <table>
        <tbody>
          <tr>
            <td>Category:</td>
            <td>
              {{ selectedTherapy.category }}
            </td>
          </tr>
          <tr>
            <td>Indications:</td>
            <td>{{ selectedTherapy.indications }}</td>
          </tr>
          <tr>
            <td>Contraindications</td>
            <td v-if="Array.isArray(selectedTherapy.contraindications)">
              <ul>
                <li
                  v-for="(c, i) in selectedTherapy.contraindications"
                  :key="`contraindications_${i}`"
                >
                  {{ c }}
                </li>
              </ul>
            </td>
            <td v-else>{{ selectedTherapy.contraindications }}</td>
          </tr>
          <tr>
            <td>Cautions:</td>
            <td>
              <ul>
                <li
                  v-for="(caution, index) in selectedTherapy.cautions"
                  :key="`cautions_${index}`"
                  class="caution"
                >
                  <span v-html="caution"></span>
                </li>
              </ul>
            </td>
          </tr>
          <tr v-if="selectedTherapy.recommendations">
            <td>Recommendations:</td>
            <td>
              <div
                class="recommendation"
                v-for="(item, index) in selectedTherapy.recommendations"
                :key="`recommendations_${index}`"
              >
                <span v-html="item"></span>
              </div>
            </td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{{ selectedTherapy.description }}</td>
          </tr>
          <tr v-if="selectedTherapy.focus.length > 0">
            <td>Focus:</td>
            <td>
              <ul>
                <li
                  v-for="(item, index) in selectedTherapy.focus"
                  :key="`focus_${index}`"
                >
                  {{ item }}
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Frequency:</td>
            <td>
              <FrequencyList :frequency="selectedTherapy.frequency" />
            </td>
          </tr>
          <tr>
            <td>Source:</td>
            <td>{{ selectedTherapy.source }}</td>
          </tr>
          <tr>
            <td>Resources:</td>
            <td>
              <ul>
                <li
                  v-for="(resource, index) in selectedTherapy.resources"
                  :key="`resource_${index}`"
                >
                  <a :href="resource.link" target="_blank">
                    {{ resource.name }} ({{ resource.source }})
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="table-container">
      <div v-if="selectedTherapy?.packages?.length > 0" class="table-container">
        <h3>
          Elements
        </h3>
        <table class="elements">
          <thead class="elements">
            <th colspan="2"></th>
            <th>Amount</th>
            <th>Volume Infused</th>
            <th>Amount Infused</th>
          </thead>
          <tbody
            v-for="(_package, index) in selectedTherapy.packages"
            :key="`packages_${index}`"
          >
            <Package v-if="'label' in _package" :package="_package" />
            <Element v-else :element="_package" />
          </tbody>
        </table>
      </div>

      <div class="table-container" v-if="hasSubstrate">
        <table class="elements">
          <thead>
            <tr>
              <th colspan="3">Substrate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ selectedTherapy.substrate.name }}</td>
              <td class="amount">
                {{ selectedTherapy.substrate.amount }}
              </td>
              <td>{{ selectedTherapy.substrate.units }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="selectedTherapy.infusion?.minimum" class="table-container">
        <table class="elements">
          <thead>
            <tr>
              <th>Infusion rate</th>

              <th v-if="selectedTherapy.infusion?.initial">Initial</th>
              <th v-if="selectedTherapy.infusion?.minimum">Minimum</th>
              <th v-if="selectedTherapy.infusion?.maximum">Maximum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td v-if="selectedTherapy.infusion?.initial">
                {{ selectedTherapy.infusion?.initial }}
              </td>
              <td v-if="selectedTherapy.infusion?.minimum">
                {{ selectedTherapy.infusion?.minimum }}
              </td>
              <td v-if="selectedTherapy.infusion?.maximum">
                {{ selectedTherapy.infusion?.maximum }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref, watchEffect, computed } from 'vue'
import { useRouter } from 'vue-router'
import { isObject } from '@/utilities'

// data imports

import { useFirestore, useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = useFirestore()

const therapies = useCollection(collection(db, 'therapies'))
const substrates = useCollection(collection(db, 'substrates'))
const doses = useCollection(collection(db, 'doses'))

// component imports

import Element from '../components/Element.vue'
import FrequencyList from '../components/FrequencyList.vue'
import Package from '../components/Package.vue'
// import { MAX_VALUE_MILLIS } from '@firebase/util'

// initializations

const router = useRouter()
const props = defineProps(['id'])
const selectedTherapy = ref(null)

// "max_therapies": used for navigation code.  When cycling between therapies, I need to know when to reset to the beginning.

watchEffect(() => {
  const max_therapies = therapies.value.length

  let selectedId = Number(props.id)

  // Check to see that I have received a valid therapy id.
  // Handle error cases appropriately.
  if (Number.isNaN(selectedId)) {
    // Couldn't convert to a number
    let _message = `Invalid id: ${props.id}`
    console.log(_message)
    throw new Error(_message)
  } else if (selectedId <= 0) {
    // Id is too small
    selectedId = max_therapies
    pushRoute(selectedId)
  } else if (selectedId > max_therapies) {
    // Id is too big
    selectedId = 1
    pushRoute(selectedId)
  }

  // Get the requested therapy data object
  if (
    therapies.value.length > 0 &&
    substrates.value.length > 0 &&
    doses.value.length > 0
  ) {
    let _therapy = findRequestedTherapy(selectedId)

    // console.log(_therapy)

    selectedTherapy.value = _therapy
  }
})

const hasSubstrate = computed(() => {
  return isObject(selectedTherapy.value.substrate)
})

function findRequestedTherapy(idRequested) {
  // IS THIS SHALLOW?
  const _therapies = Object.values(therapies.value) // convert object of objects to array of objects

  let _therapy = _therapies.find((i) => i.record_id == idRequested)
  return {
    name: _therapy.name,
    category: _therapy.category.name,
    indications: _therapy.indications,
    contraindications: _therapy.contraindications,
    cautions: _therapy.cautions,
    recommendations: _therapy.recommendations,
    description: _therapy.description,
    focus: _therapy.focus,
    frequency: _therapy.frequency,
    source: _therapy.source,
    resources: _therapy.resources,
    substrate: hydrateSubstrate(_therapy.substrate),
    packages: hydratePackages(_therapy.packages),
    infusion: _therapy.infusion,
  }
}

function hydrateSubstrate(_substrate) {
  if (_substrate == null) return null
  let __substrate = substrates.value.find((s) => s.id == _substrate)
  return __substrate
}

function hydratePackages(__packages) {
  let _packages = [...__packages]

  _packages.forEach((p, index) => {
    if (isObject(p) && !('dose' in p)) {
      // console.log('already hydrated')
      return
    }

    // Threee types of package
    if (typeof p == 'string') {
      try {
        let key = p
        _packages[index] = getDose(key)
      } catch (err) {
        throw err
      }
    } else if (isObject(p)) {
      try {
        let key = p.dose
        _packages[index].elements = [getDose(key)]
      } catch (err) {
        throw err
      }
    } else if (Array.isArray(p)) {
      let key = p[1]

      if (isObject(key)) {
        // console.log('already hydrated')
        return
      }

      console.log(p)
      try {
        let _dose = getDose(key)
        _packages[index][1] = _dose
      } catch (err) {
        throw err
      }
    }
  })

  console.log(__packages)
  console.log(_packages)
  return _packages
}

function getDose(key) {
  let _dose = doses.value.find((d) => d.id == key)

  if (!isObject(_dose)) {
    let _message = `Key not found: ${key}`
    console.log(_message)
    throw new Error(_message)
  }

  console.log(_dose)

  if ('elements' in _dose) {
    let new_array = _dose.elements.map((key) => getDose(key))

    return {
      label: _dose.label,
      id: _dose.id,
      record_id: _dose.record_id,
      elements: new_array,
    }
  } else {
    return {
      amount: _dose.amount,
      id: _dose.id,
      record_id: _dose.record_id,
      amount_element_infused: _dose.amount_element_infused,
      element_id: _dose.element_id,
      element_infused_units: _dose.element_infused_units,
      elemental_units_per: _dose.elemental_units_per,
      name: _dose.name,
      therapies: _dose.therapies,
      volume_infused: _dose.volume_infused,
      volume_infused_units: _dose.volume_infused_units,
      volume_units: _dose.volume_units,
    }
  }
}

function goPrev() {
  const num = Number(props.id)

  if (Number.isNaN(num)) {
    let _message = `goPrev didn't receive a valid number: ${props.id}`
    console.log(_message)
    throw new Error(_message)
  } else {
    pushRoute(num - 1)
  }
}
function goNext() {
  const num = Number(props.id)

  if (Number.isNaN(num)) {
    let _message = `goNext didn't receive a valid number: ${props.id}`
    console.log(_message)
    throw new Error(_message)
  } else {
    pushRoute(num + 1)
  }
}

function pushRoute(id) {
  router.push({
    name: 'TherapyView',
    params: {
      id: id,
    },
  })
}
</script>

<style scoped>
article {
  font-size: 1.35rem;
  font-family: system-ui;
  line-height: 1.5;
  width: 1200px;
  margin-inline: auto;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav button {
  margin: 0 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  background-color: hsl(192 19% 45% / 1);
  color: white;
  font-weight: 700;
  border: none;
}

html[color-scheme='light'] nav button {
  /* background-color: hsl(57 39% 90% / 1); */
  background-color: white;
  color: hsl(276 100% 19%);
  border: 1px solid hsl(276 100% 19%);
}

nav button:hover {
  cursor: pointer;
}

section.table-container {
  margin: 2rem 2rem;
  padding: 0 1rem 1rem;
  max-width: 100%;
  overflow-x: auto;
  /* border: 1px solid white; */
  background-color: hsl(192 19% 45% / 1);
}

html[color-scheme='light'] section.table-container {
  /* background-color: hsl(57 39% 90% / 1); */
  background-color: white;
}

section + section,
div.table-container + div.table-container {
  margin-top: 3rem;
}

h2 {
  margin: 1rem 2rem 1rem 2.5rem;
  font-weight: 600;
}

h3 {
  background: hsl(276 100% 19%);
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 1rem;
  text-align: left;
  margin: 1rem 0 2rem 0;
  color: white;
  font-weight: 600;
}

table {
  border-collapse: collapse;
  min-width: 15rem;
}

th,
td {
  padding: 0.5rem 1rem 0.5rem 1rem;
  vertical-align: top;
}

th {
  text-align: left;
  background: hsl(276 100% 19% / 0.2);
}

td.amount {
  text-align: right;
}

td.name {
  text-transform: capitalize;
}

/* table.elements th,
table.elements td {
  border: 1px solid white;
} */

table.elements thead.elements th:first-of-type {
  min-width: 20rem;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.recommendation:not(:last-child):not(:first-child) {
  padding-top: 0.75rem;
}

html[color-scheme='light'] h2 {
  color: hsl(276 100% 19%);
}

html[color-scheme='light'] th,
html[color-scheme='light'] td {
  color: hsl(276 100% 19%);
  font-weight: 600;
}

a {
  color: white;
}

a:hover {
  text-decoration: underline;
}
</style>
