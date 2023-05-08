<template>
  <tr>
    <td class="service" colspan="8">{{ service.name }}</td>
  </tr>
  <tr v-for="(m, rowIndex) in max_therapies" :key="rowIndex">
    <td v-for="(target, index) in target_systems" :key="index">
      <router-link
        :to="{
          name: 'TherapyView',
          params: { id: `${getTherapy(target, rowIndex)?.id}` },
        }"
      >
        {{ getTherapy(target, rowIndex)?.name }}
      </router-link>
    </td>
  </tr>
</template>

<script setup>
import TargetSystems from '@/assets/data/target_systems.mjs'
import Services from '@/assets/data/services.mjs'

const services = Services.services
const target_systems = TargetSystems.target_systems
const num_systems = target_systems.length

const props = defineProps(['serviceid'])

let service = services.find((service) => +service.id === +props.serviceid)

function getTherapy(target, rowIndex) {
  return target.services.find((s) => +s.id === +props.serviceid).therapies[
    rowIndex
  ]
}

let max_therapies = 0

for (let j = 0; j < num_systems; j++) {
  let _system = target_systems[j]
  let _services = _system.services

  let _service = _services.find((s) => +s.id === +props.serviceid)

  let num_therapies = _service.therapies.length

  if (num_therapies > max_therapies) {
    max_therapies = num_therapies
  }
}
</script>

<style scoped>
td.service {
  /* background-color: hsl(192 19% 45% / 1); */
  /* background: hsl(276 100% 19% / 0.2); */
  background: hsl(207 24% 43% / 1);
}

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
