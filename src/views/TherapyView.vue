<template>
  <article v-if="selectedTherapy">
    <h2>{{ selectedTherapy.name }}</h2>

    <div class="table-container">
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
                ></li>
              </ul>
              {{ c }}
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
                >
                  <span v-html="caution" class="caution"></span>
                </li>
              </ul>
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
              <ul>
                <li
                  v-for="(value, key) in selectedTherapy.frequency"
                  :key="key"
                >
                  {{ key }}: {{ value }}
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Source:</td>
            <td>{{ selectedTherapy.source }}</td>
          </tr>
        </tbody>
      </table>

      <p class="spacer"></p>
      <h3>
        Elements
      </h3>

      <table>
        <thead>
          <th></th>
          <th></th>
          <th>Amount</th>

          <th>Volume Infused</th>

          <th>Amount Infused</th>
        </thead>
        <tbody>
          <tr v-for="element in selectedTherapy.elements" :key="element.id">
            <td v-if="Array.isArray(element)">
              {{ element[0] }}
            </td>
            <td v-else></td>
            <td v-if="Array.isArray(element)" class="name">
              {{ element[1].name }}
            </td>
            <td v-else class="name">{{ element.name }}</td>
            <td v-if="Array.isArray(element)" class="amount">
              {{ element[1].amount }} {{ element[1].elemental_units_per }} /
              {{ element[1].volume_units }}
            </td>
            <td v-else class="amount">
              {{ element.amount }} {{ element.elemental_units_per }} /
              {{ element.volume_units }}
            </td>
            <td v-if="Array.isArray(element)" class="amount">
              {{ element[1].volume_infused }}
              {{ element[1].volume_infused_units }}
            </td>
            <td v-else class="amount">
              {{ element.volume_infused }}
              {{ element.volume_infused_units }}
            </td>
            <td v-if="Array.isArray(element)" class="amount">
              {{ element[1].amount_element_infused }}
              {{ element[1].element_infused_units }}
            </td>
            <td v-else class="amount">
              {{ element.amount_element_infused }}
              {{ element.element_infused_units }}
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td></td>
            <td>Substrate</td>
            <td>{{ selectedTherapy.substrate.name }}</td>
            <td class="amount">
              {{ selectedTherapy.substrate.amount }}
            </td>
            <td>{{ selectedTherapy.substrate.units }}</td>
            <td colspan="5"></td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th v-if="selectedTherapy.infusion?.initial">Initial</th>
            <th v-if="selectedTherapy.infusion?.minimum">Minimum</th>
            <th v-if="selectedTherapy.infusion?.maximum">Maximum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Infusion rate</td>
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
  </article>
</template>

<script setup>
import Therapies from '@/assets/data/therapies.mjs'

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
  /* width: min(1200px, 100% - 3rem); */
  width: 1200px;
  margin-inline: auto;
}

.table-container {
  margin: 1rem 2rem;
  max-width: 100%;
  overflow-x: auto;
}

table {
  border-collapse: collapse;
}

table + table {
  margin-top: 3rem;
}

h2 {
  margin: 1rem 2rem 1rem 2.5rem;
}

h3 {
  background: hsl(276 100% 19%);
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 1rem;
  text-align: left;
  margin: 1rem 0 2rem 0;
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

th a,
td a {
  color: white;
}

td.amount {
  text-align: right;
}

td.name {
  text-transform: capitalize;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

p.spacer {
  height: 2rem;
}
</style>
