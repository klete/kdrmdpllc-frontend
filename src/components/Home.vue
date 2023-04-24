<template>
  <div class="container">
    <header>
      <h1>
        Home
      </h1>
    </header>
    <div v-if="isAuthenticated">
      <ul class="flex">
        <!-- <li>
          <NavLink to="FormA" label="Form A" />
        </li>
        <li>
          <NavLink to="FormB" label="Form B" />
        </li>
        <li>
          <NavLink to="FormC" label="Form C" />
        </li>
        <li>
          <NavLink to="WE-A" label="Work Environment - A" />
        </li>
        <li>
          <NavLink to="WE-B" label="Work Environment - B" />
        </li>
        <li>
          <NavLink to="WE-C" label="Work Environment - C" />
        </li>
        <li>
          <NavLink to="WE-D" label="Work Environment - D" />
        </li>
        <li>
          <NavLink to="WE-E" label="Work Environment - E" />
        </li>
        <li>
          <NavLink to="DesignSystem" label="Design System" />
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script setup>
// import NavLink from './NavLink.vue'

import { computed } from 'vue'

const isAuthenticated = computed(() => {
  return false
})
</script>

<style scoped>
ul {
  list-style-type: none;
  flex-direction: column;
}
ul li {
  padding: 0.5em;
}
</style>
