<template>
  <ul v-if="isArray">
    <li v-for="(item, key) in frequency" :key="key">{{ item }}</li>
  </ul>
  <ul v-else>
    <li v-for="(value, key) in frequency" :key="key">{{ key }}: {{ value }}</li>
  </ul>
</template>

<script setup>
const props = defineProps(['frequency'])
const isArray = Array.isArray(props.frequency)
</script>

<style scoped></style>
