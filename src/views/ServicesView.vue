<template>
  <section class="table-container">
    <h3>
      Records
    </h3>
    <table>
      <thead>
        <th>{{ _collection }}</th>
      </thead>
      <tbody>
        <tr v-for="record in records" :key="record.id">
          <td>
            {{ record.id }}
            <!-- <router-link
              :to="{
                name: 'ServiceView',
                params: { id: `${service.id}` },
              }"
            >
              {{ service.name }}
            </router-link> -->
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { useFirestore, useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = useFirestore()
const _collection = 'doses'
const records = useCollection(collection(db, _collection))
</script>

<style scoped>
section.table-container {
  margin: 2rem 2rem;
  padding: 0rem 1rem 1rem;
  max-width: 100%;
  overflow-x: auto;
  /* background-color: hsl(192 19% 45% / 1); */
  background-color: hsl(276 100% 19% / 0.2);
}

html[color-scheme='light'] section.table-container {
  /* background-color: hsl(57 39% 90% / 1); */
  background-color: white;
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
  width: 100%;
  border-collapse: collapse;
}

th {
  padding: 0.5rem 1rem 0.5rem 1rem;
  text-align: left;
  /* background: hsl(276 100% 19% / 0.2); */
  background: hsl(207 24% 43% / 1);
  text-transform: capitalize;
}

html[color-scheme='light'] th {
  background: hsl(276 100% 19% / 0.2);
}

td a {
  color: white;
}
</style>
