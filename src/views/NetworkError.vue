<template>
  <div class="container grid grid-center">
    <h1>Uh-Oh!</h1>
    <h3>
      It looks like you're experiencing some network issues. Please take a
      breath and
      <a href="#" @click="$router.go(-1)">click here</a>
      to try again.
    </h3>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
