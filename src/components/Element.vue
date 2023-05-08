<template>
  <tr v-if="Array.isArray(element)">
    <td class="name">
      {{ element[0] }}
    </td>

    <td class="name">
      {{ element[1].name }}
    </td>

    <td class="amount">
      {{ formatNumber(element[1].amount) }} {{ element[1].elemental_units_per }}
      <span v-if="element[1].amount">/</span>
      {{ element[1].volume_units }}
    </td>

    <td class="amount">
      {{ formatNumber(element[1].volume_infused) }}
      {{ element[1].volume_infused_units }}
    </td>

    <td class="amount">
      {{ formatNumber(element[1].amount_element_infused) }}
      {{ element[1].element_infused_units }}
    </td>
  </tr>
  <tr v-else-if="typeof element == 'string'">
    <td colspan="2">
      {{ element }}
    </td>
    <td colspan="3"></td>
  </tr>
  <tr v-else>
    <td></td>
    <td class="name">{{ element.name }}</td>

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

const props = defineProps(['element'])
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

html[color-scheme='light'] th,
html[color-scheme='light'] td {
  color: hsl(276 100% 19%);
  font-weight: 600;
}
</style>
