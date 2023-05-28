<template>
  <tr v-for="(m, rowIndex) in numTableRows" :key="rowIndex">
    <td v-for="(n, colIndex) in numTableColumns" :key="colIndex">
      <TherapyLink
        :rowIndex="rowIndex"
        :colIndex="colIndex"
        :serviceIndex="serviceIndex"
      />
    </td>
  </tr>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

import TherapyLink from '@/components/TherapyLink.vue'

import { useFirestore, useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const props = defineProps(['serviceIndex'])

const db = useFirestore()

// A 'fragment' represents the set of rows and columns for a particular service.

// 'targets' form the columns
const targets = useCollection(collection(db, 'targets'))

// The number of rows in a fragment is the maximum of the number of therapies in the therapies array for each target.

var numTableRows = ref(0)
var numTableColumns = ref(0)

watchEffect(function initializeData() {
  numTableRows.value = setNumTableRows()
  numTableColumns.value = targets.value.length
})

function setNumTableRows() {
  var _maxTherapies = 0

  // Loop over the target systems, getting the list of therapies for each.
  // Target systems are displayed in the columns of the table.
  // Therapies for each target system are displayed in the column, organized by service.
  // To know how many rows I need to display for each service section, I must know how big
  // the biggest therapies array is for each service across all targets.
  for (let xsystem of targets.value) {
    let _service = xsystem.services[+props.serviceIndex]

    if (_service.therapies.length > _maxTherapies) {
      _maxTherapies = _service.therapies.length
    }
  }

  return _maxTherapies
}
</script>

<style scoped>
html[color-scheme='light'] td.service {
  background: hsl(276 100% 19% / 0.2);
}

th,
td {
  padding: 0.5rem 1rem 0.5rem 1rem;
}

th a,
td a {
  color: white;
}
th a:hover,
td a:hover {
  text-decoration: underline;
}

html[color-scheme='light'] th,
html[color-scheme='light'] td,
html[color-scheme='light'] th a,
html[color-scheme='light'] td a {
  color: hsl(276 100% 19%);
}
</style>
