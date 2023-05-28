<template>
  <tr>
    <td></td>
    <td class="name" colspan="4">
      {{ package.label }}
    </td>
  </tr>
  <tr v-for="(element, index) in elements" :key="index">
    <td></td>
    <td class="package-name">&ndash; {{ element.name }}</td>
    <td class="amount">
      {{ formatNumber(element.amount) }} {{ element.elemental_units_per }}
      <span v-if="element.amount">/</span>
      {{ element.volume_units }}
    </td>

    <td class="amount">
      {{ formatNumber(element.volume_infused) }}
      {{ element.volume_infused_units }}
    </td>

    <td class="amount">
      {{ formatNumber(element.amount_element_infused) }}
      {{ element.element_infused_units }}
    </td>
  </tr>
</template>

<script setup>
import { formatNumber } from '../utilities/index.mjs'
import { doses } from '@/assets/data/doses.json'

const elements = []

const props = defineProps(['package'])

props.package.elements.forEach((el) => {
  elements.push(doses[el])
})
</script>

<style scoped>
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

td.package-name {
  text-align: right;
}

html[color-scheme='light'] th,
html[color-scheme='light'] td {
  color: hsl(276 100% 19%);
  font-weight: 600;
}
</style>
