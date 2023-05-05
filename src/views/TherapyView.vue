<template>
  <article v-if="selectedTherapy">
    <h2>{{ selectedTherapy.name }}</h2>

    <section class="table-container">
      <h3>
        Meta data
      </h3>
      <table>
        <tbody>
          <tr>
            <td>Category:</td>
            <td>
              {{ selectedTherapy.category.name }}
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
                  :key="i"
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
                  :key="index"
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
                :key="index"
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
                <li v-for="(item, index) in selectedTherapy.focus" :key="index">
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
        </tbody>
      </table>
    </section>

    <section
      v-if="selectedTherapy?.elements?.length > 0"
      class="table-container"
    >
      <h3>
        Elements
      </h3>

      <table class="elements">
        <thead>
          <th></th>
          <th></th>
          <th>Amount</th>
          <th>Volume Infused</th>
          <th>Amount Infused</th>
        </thead>
        <tbody v-for="element in selectedTherapy.elements" :key="element.id">
          <Element :element="element" />
        </tbody>
      </table>
    </section>

    <section class="table-container">
      <div v-if="selectedTherapy?.packages?.length > 0" class="table-container">
        <h3>
          Elements
        </h3>
        <table class="elements">
          <thead>
            <th colspan="2"></th>
            <th>Amount</th>
            <th>Volume Infused</th>
            <th>Amount Infused</th>
          </thead>
          <tbody
            v-for="_package in selectedTherapy.packages"
            :key="_package.id"
          >
            <Package v-if="_package.label" :package="_package" />
            <Element v-else :element="_package" />
          </tbody>
        </table>
      </div>

      <div class="table-container" v-if="selectedTherapy.substrate.name">
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
import Therapies from '@/assets/data/therapies.mjs'

import Element from '../components/Element.vue'
import FrequencyList from '../components/FrequencyList.vue'
import Package from '../components/Package.vue'

const therapies = Therapies.therapies

const props = defineProps(['id'])

const selectedId = +props.id
const selectedTherapy = therapies.find((i) => i.id === selectedId)
</script>

<style scoped>
article {
  font-size: 1.35rem;
  font-family: system-ui;
  line-height: 1.5;
  width: 1200px;
  margin-inline: auto;
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
</style>
