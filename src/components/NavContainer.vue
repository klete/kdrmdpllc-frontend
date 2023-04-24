<template>
  <div>
    <NavBar
      @login-requested="handleLoginRequest"
      @signup-requested="handleSignupRequest"
    />
  </div>
  <modal v-if="showModal" :isActive="isActive" @close="handleCloseModal">
    <Login v-if="showLoginModal" @close="handleCloseModal" />
    <SignUp v-if="showSignUpModal" @close="handleCloseModal" />
  </modal>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import { ref, computed } from 'vue'

const showLoginModal = ref(false)
const showSignUpModal = ref(false)
const isActive = ref(false)

const handleCloseModal = () => {
  isActive.value = false
  closeModal()
}

const handleLoginRequest = () => {
  isActive.value = true
  showSignUpModal.value = false
  showLoginModal.value = true
}
const handleSignupRequest = () => {
  isActive.value = true
  showLoginModal.value = false
  showSignUpModal.value = true
}

const showModal = computed(() => showLoginModal.value || showSignUpModal.value)

const closeModal = () => {
  setTimeout(() => {
    showLoginModal.value = false
    showSignUpModal.value = false
  }, 300)
}
</script>

<style scoped></style>
