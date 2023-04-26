<template>
  <section>
    <h2>{{ selectedIndex.name }}</h2>
  </section>
</template>

<script setup>
import Data from '@/assets/data/base.mjs'

const indexes = Data.services

const props = defineProps(['id'])

const selectedId = +props.id
const selectedIndex = indexes.find((i) => i.id === selectedId)

console.log(selectedIndex)
</script>

<style scoped>
section {
  margin: 1rem 2rem;
}

section + section {
  margin-top: 4rem;
}
</style>
