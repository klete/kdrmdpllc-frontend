<template>
  <section class="table-container">
    <h3>
      Elements Index
    </h3>

    <table class="layout">
      <tbody v-for="(element, index) in _elements" :key="`elements_${index}`">
        <tr>
          <td class="name">{{ element.name }}</td>
          <td>
            <table class="elements">
              <thead>
                <th>Amount</th>
                <th>Volume Infused</th>
                <th>Amount Infused</th>
                <th></th>
              </thead>
              <tbody v-for="(dose, _index) in element.doses" :key="_index">
                <tr>
                  <td class="amount">
                    {{ formatNumber(dose.amount) }}
                    {{ dose.elemental_units_per }}
                    <span v-if="dose.amount">/</span>
                    {{ dose.volume_units }}
                  </td>

                  <td class="amount">
                    {{ formatNumber(dose.volume_infused) }}
                    {{ dose.volume_infused_units }}
                  </td>

                  <td class="amount">
                    {{ formatNumber(dose.amount_element_infused) }}
                    {{ dose.element_infused_units }}
                  </td>

                  <td v-if="dose.hydrated_therapies.length > 0">
                    <ul>
                      <li
                        v-for="(therapy, j) in dose.hydrated_therapies"
                        :key="j"
                      >
                        <router-link
                          :to="{
                            name: 'TherapyView',
                            params: { id: `${therapy.id}` },
                          }"
                        >
                          {{ therapy.name }} ({{ therapy.category }})
                        </router-link>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { formatNumber } from '@/utilities/index.mjs'

import { ref, watchEffect } from 'vue'
import { useFirestore, useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = useFirestore()

const therapies = useCollection(collection(db, 'therapies'))
const elements = useCollection(collection(db, 'elements'))
const doses = useCollection(collection(db, 'doses'))

// What we will display
const _elements = ref([])

watchEffect(function initializeData() {
  // Reset to empty array when we rerun the initialization code
  _elements.value = []

  for (var _element of elements.value) {
    // Construct the element
    var elementObj = {
      name: _element.name,
      doses: [],
    }

    // Construct the different ways in which it is used
    for (var _dose of _element.doses) {
      let doseObj = getDose(_dose)

      // each dose is used in different therapies
      if ('therapies' in doseObj) {
        let hydrated_therapies = getTherapiesForIds(doseObj.therapies)
        doseObj.hydrated_therapies = hydrated_therapies
      } else {
        doseObj.hydrated_therapies = []
      }

      elementObj.doses.push(doseObj)
    }

    _elements.value.push(elementObj)
  }
})

function getDose(doseName) {
  let _dose = doses.value.find(function isMatch(dose) {
    return dose.id == doseName
  })

  let new_dose = Object.assign({}, _dose)
  new_dose.therapies = [..._dose.therapies]
  return new_dose
}

function getTherapiesForIds(therapyIds) {
  return therapyIds.map(getTherapyForId).sort(sortTherapies)
}

function getTherapyForId(therapyId) {
  let _therapy = therapies.value.find(function isMatch(therapy) {
    return therapy.record_id == therapyId
  })

  return {
    name: _therapy.name,
    category: _therapy.category.name,
    id: _therapy.id,
  }
}

function sortTherapies(th1, th2) {
  const name1 = th1.name.toLowerCase()
  const name2 = th2.name.toLowerCase()
  if (name1 < name2) {
    return -1
  } else if (name1 > name2) {
    return 1
  } else {
    return 0
  }
}
</script>

<style scoped>
section.table-container {
  margin: 2rem 2rem;
  padding: 0rem 1rem 1rem;
  max-width: 100%;
  overflow-x: auto;

  background-color: hsl(276 100% 19% / 0.2);
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

html[color-scheme='light'] section.table-container {
  /* background-color: hsl(57 39% 90% / 1); */
  background-color: white;
}

table.layout td:first-child {
  padding: 1rem 1rem 0.5rem 1rem;
  vertical-align: top;
}
table.elements th,
table.elements td {
  padding: 0.5rem 1rem 0.5rem 1rem;
  vertical-align: top;
}

th {
  text-align: left;
  background: hsl(276 100% 19% / 0.2);
}

td.amount {
  text-align: right;
  width: 12rem;
}

td.name {
  text-transform: capitalize;
}

th a,
td a {
  color: white;
}
th a:hover,
td a:hover {
  text-decoration: underline;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

html[color-scheme='light'] th,
html[color-scheme='light'] td {
  color: hsl(276 100% 19%);
  font-weight: 600;
}

table.layout th,
table.layout td {
  border: 1px solid white;
}
table.elements th,
table.elements td {
  border: 1px solid white;
}
</style>
