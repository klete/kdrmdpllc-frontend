<template>
  <div class="container"></div>
</template>

<script>
export default {
  emits: ['login-requested'],
  mounted() {
    this.$emit('login-requested')
  },
}
</script>
