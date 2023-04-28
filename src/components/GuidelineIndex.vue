<template>
  <div class="table-container">
    <table>
      <caption>
        Guideline Index
      </caption>

      <tr>
        <th v-for="service in services" :key="service.id">
          <router-link
            :to="{ name: 'ServiceView', params: { id: service.id } }"
          >
            {{ service.name }}
          </router-link>
        </th>
      </tr>

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
    </table>
  </div>
</template>

<script setup>
import Services from '@/assets/data/services.mjs'

const services = Services.services

const numRowsServices = 18
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
