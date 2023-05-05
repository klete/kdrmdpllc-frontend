<template>
  <section class="table-container">
    <h3>
      Target Systems
    </h3>
    <table>
      <thead>
        <tr>
          <th v-for="system in target_systems" :key="system.id">
            {{ system.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <TargetSystemFragment
          v-for="service in services"
          :key="service.id"
          :serviceid="service.id"
        />
      </tbody>
    </table>
  </section>
</template>

<script setup>
import TargetSystems from '@/assets/data/target_systems.mjs'
import Services from '@/assets/data/services.mjs'
import TargetSystemFragment from './TargetSystemFragment.vue'

const services = Services.services

const target_systems = TargetSystems.target_systems
</script>

<style scoped>
section.table-container {
  margin: 2rem 2rem;
  padding: 0rem 1rem 1rem;
  max-width: 100%;
  overflow-x: auto;
  background-color: hsl(192 19% 45% / 1);
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
  background: hsl(276 100% 19% / 0.2);
}

th a,
td a {
  color: white;
}

html[color-scheme='light'] th,
html[color-scheme='light'] td,
html[color-scheme='light'] th a,
html[color-scheme='light'] td a {
  color: hsl(276 100% 19%);
}

html[color-scheme='light'] section.table-container {
  /* background-color: hsl(57 39% 90% / 1); */
  background-color: white;
}
</style>
