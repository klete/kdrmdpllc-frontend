<template>
  <article>
    <h2>
      Master Therapy Guide
    </h2>

    <GuidelineIndex />
    <p class="spacer"></p>
    <TargetSystems />
  </article>
</template>

<script setup>
import GuidelineIndex from '../components/GuidelineIndex.vue'
import TargetSystems from '../components/TargetSystems.vue'
</script>

<style scoped>
h2 {
  margin: 1rem 2rem 1.5rem 2.5rem;
}
p.spacer {
  height: 3rem;
}
</style>
