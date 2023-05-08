<template>
  <article>
    <ul>
      <li>
        <router-link :to="{ name: 'GuidelineIndexView' }">
          Guideline Index
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'TargetSystemsView' }">
          Target Systems
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ElementsIndexView' }">
          Elements
        </router-link>
      </li>
    </ul>
  </article>
</template>

<script setup></script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  padding: 0.5rem 1rem;
}
li a {
  color: white;
}

li a:hover {
  text-decoration: underline;
}
</style>
