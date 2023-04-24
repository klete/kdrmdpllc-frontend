<template>
  <teleport to="#end-of-body">
    <div
      id="backdrop"
      @click="handleClick"
      :class="{ fadeIn: isActive, fadeOut: !isActive }"
    ></div>
    <div
      id="content"
      v-bind="$attrs"
      :class="{ fadeIn: isActive, fadeOut: !isActive }"
    >
      <slot></slot>
    </div>
  </teleport>
</template>

<script setup>
defineProps(['isActive'])
const emit = defineEmits(['close'])

const handleClick = () => {
  emit('close')
}
</script>

<style scoped>
div#backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #000;
  opacity: 0.5;
  z-index: 500;
}

div#content {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  padding: 0;
  margin: 0;

  z-index: 600;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;
  opacity: 1;
  background: var(--form-bkg);
}

/* FormD vs Login: want FormD - JobProfile to be large */
div#content.full-screen {
  top: 5vh;
  bottom: 3vh;
}

@media (min-width: 768px) {
  div#content {
    /* left: calc(50% - 20rem); */
    max-width: 80rem;
  }
}

#backdrop.fadeIn {
  animation: enterElement-backdrop 0.3s ease-in;
}
#backdrop.fadeOut {
  animation: leaveElement-backdrop 0.3s ease-out;
}
#backdrop.fadeIn {
  opacity: 0.5;
}
#backdrop.fadeOut {
  opacity: 0;
}

#content.fadeIn {
  animation: enterElement 0.3s ease-in;
}
#content.fadeOut {
  animation: leaveElement 0.3s ease-out;
}
#content.fadeIn {
  opacity: 1;
}
#content.fadeOut {
  opacity: 0;
}

@keyframes enterElement-backdrop {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}
@keyframes leaveElement-backdrop {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
}

@keyframes enterElement {
  from {
    opacity: 0.5;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes leaveElement {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
}
</style>
