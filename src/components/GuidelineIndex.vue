<template>
  <section class="table-container">
    <h3>
      Guideline Index
    </h3>
    <table>
      <thead>
        <tr>
          <th v-for="service in services" :key="service.id">
            <router-link
              :to="{ name: 'ServiceView', params: { id: service.id } }"
            >
              {{ service.name }}
            </router-link>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in numRowsServices">
          <td v-for="j in services.length">
            <router-link
              :to="{
                name: 'TherapyView',
                params: { id: `${services[j - 1]?.therapies[i - 1]?.id}` },
              }"
            >
              {{ services[j - 1]?.therapies[i - 1]?.name }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import Services from '@/assets/data/services.mjs'

const services = Services.services

const numRowsServices = 18
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

table + table {
  margin-top: 3rem;
}

th,
td {
  padding: 0.5rem 1rem 0.5rem 1rem;
}

th {
  text-align: left;
  background: hsl(207 24% 43% / 1);
}

th a,
td a {
  color: white;
}

th a:hover,
td a:hover {
  text-decoration: underline;
}

html[color-scheme='light'] section.table-container {
  /* background-color: hsl(57 39% 90% / 1); */
  background-color: white;
}

html[color-scheme='light'] th {
  background-color: hsl(276 100% 19% / 0.2);
}

html[color-scheme='light'] th a,
html[color-scheme='light'] td a {
  color: hsl(276 100% 19%);
}
</style>
