<template>
  <div class="table-container">
    <table>
      <caption>
        Target Systems
      </caption>
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
  </div>
</template>

<script setup>
import TargetSystems from '@/assets/data/target_systems.mjs'
import Services from '@/assets/data/services.mjs'
import TargetSystemFragment from './TargetSystemFragment.vue'

const services = Services.services

const target_systems = TargetSystems.target_systems
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
  width: 100%;
  border-collapse: collapse;
}

table + table {
  margin-top: 3rem;
}

caption {
  background: hsl(276 100% 19%);
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 1rem;
  text-align: left;
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
</style>
