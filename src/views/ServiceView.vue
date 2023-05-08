<template>
  <section v-if="selectedService">
    <h2>{{ selectedService.name }}</h2>
    <ul>
      <li v-for="therapy in selectedService.therapies" :key="therapy.id">
        {{ therapy.name }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import Services from '@/assets/data/services.mjs'

const services = Services.services

const props = defineProps(['id'])

const selectedId = +props.id
const selectedService = services.find((i) => i.id === selectedId)
</script>

<style scoped>
section {
  margin: 1rem 2rem;
}
</style>
