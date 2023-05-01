<template>
  <NavBar
    :menuIsActive="menuIsActive"
    @update:menu-status="updateMenuStatus"
    @login-requested="handleLoginRequest"
    @signup-requested="handleSignupRequest"
  />

  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" @login-requested="handleLoginRequest" />
      </transition>
    </router-view>
  </main>

  <footer></footer>

  <FlashMessage v-if="FlashMessageService.hasMessage()" />

  <modal v-if="showModal" :isActive="isActive" @close="handleCloseModal">
    <Login v-if="showLoginModal" @close="handleCloseModal" />
    <SignUp v-if="showSignUpModal" @close="handleCloseModal" />
  </modal>
</template>

<script setup>
import FlashMessage from './components/FlashMessage.vue'
import NavBar from './components/NavBar.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

import FlashMessageService from './services/FlashMessageService'

import { onMounted, computed, ref } from 'vue'

const menuIsActive = ref(false)
const isActive = ref(false)
const showSignUpModal = ref(false)
const showLoginModal = ref(false)

onMounted(() => {
  document.body.onclick = handleClick
})

function updateMenuStatus(status) {
  // console.log('Menu status is: ' + status)
  menuIsActive.value = status
}

function handleClick() {
  // console.log('app was clicked')
  menuIsActive.value = false
}

function handleCloseModal() {
  isActive.value = false
  closeModal()
}

function handleLoginRequest() {
  isActive.value = true
  showSignUpModal.value = false
  showLoginModal.value = true
}
function handleSignupRequest() {
  isActive.value = true
  showLoginModal.value = false
  showSignUpModal.value = true
}

function closeModal() {
  // Need a small delay so that the modal can fade out
  setTimeout(() => {
    showLoginModal.value = false
    showSignUpModal.value = false
  }, 300)
}

const showModal = computed(() => {
  return showLoginModal.value || showSignUpModal.value
})
</script>

<style>
/* fade */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* slide fade */

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 500ms ease-out;
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

footer {
  height: 5rem;
}

.caution,
.caution-label {
  font-weight: 700;
  text-decoration: underline;
}

em {
  font-weight: 900;
}
</style>
