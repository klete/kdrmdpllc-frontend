<template>
  <teleport to="#end-of-body">
    <div id="flashMessage">
      {{ GStore.flashMessage }}
    </div>
  </teleport>
</template>

<script>
export default {
  inject: ['GStore'],
}
</script>

<style scoped>
@keyframes fade {
  0% {
    background: var(--palette-124-coated-100);
    color: var(--palette-black-6-coated-100);
  }
  80% {
    background: var(--palette-124-coated-100);
    color: var(--palette-black-6-coated-100);
  }
  90% {
    background: transparent;
    color: transparent;
  }
  100% {
    background: transparent;
    color: transparent;
  }
}

#flashMessage {
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem;
  animation-name: fade;
  animation-duration: 3s;
  text-align: center;

  font-size: 1.8rem;
  background: transparent;
}
</style>
