<template>
  <section>
    <h3>
      {{ selectedService.name }}

      <router-link
        :to="{
          name: 'ServiceView',
          params: { id: `${id}` },
        }"
      >
        Cancel
      </router-link>
    </h3>
    <div>
      Edit Service
    </div>
  </section>
</template>

<script setup>
import data from '@/assets/data/services.json'

const services = data.services

const props = defineProps(['id'])

const selectedId = +props.id
const selectedService = services.find((i) => i.id === selectedId)

console.log(selectedService)
</script>

<style scoped>
section {
  margin: 2rem 2rem;
  padding: 0rem 1rem 1rem;
  max-width: 100%;
  overflow-x: auto;
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

  display: flex;
  justify-content: space-between;
}

a {
  color: white;
}
</style>
