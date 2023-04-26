<template>
  <article>
    <h2>
      Master Therapy Guide
    </h2>

    <div class="table-container">
      <table>
        <caption>
          Guideline Index
        </caption>

        <tr>
          <th v-for="service in services" :key="service.id">
            <router-link
              :to="{ name: 'IndexView', params: { id: service.id } }"
            >
              {{ service.name }}
            </router-link>
          </th>
        </tr>

        <tr v-for="i in numRowsServices">
          <td v-for="j in services.length">
            {{ services[j - 1]?.therapies[i - 1]?.name }}
          </td>
        </tr>
      </table>

      <table>
        <caption>
          Target Systems
        </caption>

        <tr>
          <th v-for="system in target_systems" :key="system.id">
            {{ system.name }}
          </th>
        </tr>
      </table>
    </div>
  </article>
</template>

<script setup>
import Data from '@/assets/data/base.mjs'

const services = Data.services
const therapies = Data.therapies
const target_systems = Data.target_systems
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

table {
  width: 100%;
  border-collapse: collapse;
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

th a {
  color: white;
}

.table-container {
  margin: 1rem 2rem;
  max-width: 100%;
  overflow-x: auto;
}
</style>
