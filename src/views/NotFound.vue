<template>
  <div class="container grid grid-center">
    <h1>Oops!</h1>
    <h3>The {{ resource }} you are looking for is not here.</h3>
    <router-link :to="{ name: 'Form' }" class="btn">Home</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page',
    },
  },
}
</script>

<style scoped>
h1,
h3 {
  margin: 1rem 0;
}
</style>
