<template>
  <a :class="{ 'nav-btn': label }" href="#" @click="goto">
    <span v-if="label">{{ label }}</span>
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    to: { String, required: true },
    label: { String, required: false },
  },
  emits: ['wasClicked'],
  methods: {
    goto() {
      this.$router.push({
        name: this.to,
      })
      this.$emit('wasClicked')
    },
  },
}
</script>

<style></style>
