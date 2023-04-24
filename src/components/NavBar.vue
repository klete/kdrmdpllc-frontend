<template>
  <div id="nav-container">
    <header class="flex">
      <div class="header-logo flex flex-center">
        <NavLink to="Welcome" @was-clicked="closeMenu">
          <img
            class="dark-mode"
            src="../assets/images/Vest-log-on-get-cleared-go-to-work.png"
            alt="Vest Logo"
          />
          <img
            class="light-mode"
            src="../assets/images/VEST_Logotype-01.png"
            alt="Vest Logo"
          />
        </NavLink>
      </div>
      <nav
        @click.stop=""
        id="navbar"
        class="flex"
        :class="{ active: menuIsActive }"
      >
        <ul class="flex">
          <li>
            <NavLink to="Welcome" label="Home" @was-clicked="closeMenu" />
          </li>

          <!-- <li v-if="isAuthenticated">
            <NavLink to="WE-A" label="WE-A" @was-clicked="closeMenu" />
          </li>
          <li v-if="isAuthenticated">
            <NavLink to="WE-B" label="WE-B" @was-clicked="closeMenu" />
          </li>
          <li v-if="isAuthenticated">
            <NavLink to="WE-C" label="WE-C" @was-clicked="closeMenu" />
          </li>
          <li v-if="isAuthenticated">
            <NavLink to="WE-D" label="WE-D" @was-clicked="closeMenu" />
          </li>
          <li v-if="isAuthenticated">
            <NavLink to="WE-E" label="WE-E" @was-clicked="closeMenu" />
          </li> -->
          <!-- <li @click="signup" v-if="!isAuthenticated">
          <span class="nav-btn">Sign Up</span>
        </li> -->
          <li v-if="!isAuthenticated">
            <span @click="login" class="nav-btn">Login</span>
          </li>
          <li v-if="isAuthenticated">
            <span @click="handleLogout" class="nav-btn">Log Out</span>
          </li>
          <li>
            <span @click="changeTheme" class="color-theme nav-btn flex">
              <span v-if="isDarkTheme">Light Mode</span>
              <span v-else>Dark Mode</span>
              <Sun v-if="isDarkTheme" />
              <Moon v-else />
            </span>
          </li>
        </ul>
      </nav>

      <div
        id="toggle"
        @click.stop="toggleMenu"
        :class="{ active: menuIsActive }"
      >
        <div class="menu-icon"></div>
      </div>
    </header>
  </div>
</template>

<script setup>
import Moon from './Moon.vue'
import Sun from './Sun.vue'
import NavLink from './NavLink.vue'

import useLogout from '../composables/use-logout.js'
import getUser from '../composables/get-user.js'
import FlashMessageService from '../services/FlashMessageService'
import { onMounted, computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const theme = ref(null)
let timeout = null

const { user } = getUser()
const isAuthenticated = ref(!!user.value)

// console.log(user)
// console.log(user.value)
// console.log(isAuthenticated.value)

watch(user, (_user) => {
  // console.log(_user?.uid)
  isAuthenticated.value = !!_user?.uid
})

defineProps({
  menuIsActive: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([
  'login-requested',
  'signup-requested',
  'update:menuStatus',
])

onMounted(() => {
  initTheme()
  updateDisplay(theme.value)
})

function updateDisplay(theme) {
  document.querySelector(':root').setAttribute('color-scheme', `${theme.value}`)
}

function storeTheme(theme) {
  localStorage.setItem('theme', theme.value)
}

function getSystemTheme() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

  return preference
}

function getStoredTheme() {
  return localStorage.getItem('theme')
}

function login() {
  // menuIsActive = false
  emit('update:menuStatus', false)
  emit('login-requested')
}

async function handleLogout() {
  // async
  console.log('logging out')

  const { logout, error } = useLogout()

  await logout()

  if (error.value) {
    alert(error.value)
  } else {
    emit('update:menuStatus', false)
    FlashMessageService.setMessage('You are now logged out.')
    localStorage.removeItem('user')
    console.log('user logged out')
    router.push('/')
  }
}

function signup() {
  // menuIsActive = false
  emit('update:menuStatus', false)
  emit('signup-requested')
}

function toggleMenu() {
  // menuIsActive = !menuIsActive
  emit('update:menuStatus', !menuIsActive)
}

function closeMenu() {
  if (timeout) {
    clearTimeout(timeout)
  }

  timeout = setTimeout(() => {
    // menuIsActive = false
    emit('update:menuStatus', false)
  }, 300)
}

function initTheme() {
  theme.value = getStoredTheme() || getSystemTheme()
}

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

function changeTheme() {
  toggleTheme()
  updateDisplay(theme.value)
  storeTheme(theme.value)
}

const isDarkTheme = computed(() => {
  return theme.value === 'dark'
})
</script>

<style scoped>
header {
  --gap: 0.3rem;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  /* bottom: calc(100vh - 6.5rem); */ /* iOS (Safari) has a problem with calc and vh units */
  bottom: calc(100% - 6.5rem);
  align-items: center;
  padding-top: 0.5rem; /* other logo: 0 */
  /* background-color: orange; */
  background-color: var(--bkg);
}

.header-logo {
  height: 6rem;
  font-size: 2.5rem;
  color: var(--text);
  margin-left: 2rem;
}

.header-logo img {
  /* max-height: 30px; // for other logo // */
  width: 10rem;
}

#navbar {
  position: fixed;
  top: 0;
  right: 2rem;
  height: 6rem;
  transition: 500ms;
  overflow: hidden;
  color: var(--text);
  background-color: var(--bkg);
  opacity: 0.9;
}

#navbar ul {
  position: relative;
  list-style-type: none;
  font-size: 1.5rem;
}

#navbar ul li {
  display: flex;
  justify-content: center;
  align-items: center;
}

span.color-theme > span {
  display: none;
}

#navbar ul li span.color-theme {
  padding: 1.2rem;
}

#toggle {
  display: none;
}

svg {
  pointer-events: none;
}

@media (max-width: 835px) {
  #navbar {
    inset: 0 0 0 25%;
    height: 100vh;
    z-index: 1000;
    padding: min(20rem, 15vh) 2rem;
    transform: translateX(100%);
    transition: transform 500ms ease-in-out;
    color: var(--navbar-text);
    background-color: var(--navbar-bkg);
  }

  #navbar.active {
    transform: translateX(0);
    overflow: scroll;
  }

  #navbar ul {
    width: 100%;
    margin-top: 3rem;
    flex-direction: column;
  }

  #navbar ul li {
    align-items: center;
    justify-content: flex-start;
  }

  #navbar ul li + li {
    margin-left: 0;
  }

  #toggle {
    position: absolute;
    top: 0;
    right: 1rem;
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    z-index: 2000;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  #toggle .menu-icon {
    position: relative;
    width: 2.8rem;
    height: 2px;
    background: var(--text);
    pointer-events: none;
    transition: 200ms;
  }

  #toggle .menu-icon::before {
    content: '';
    position: absolute;
    width: 2.8rem;
    height: 2px;
    background: var(--text);
    transform: translateY(-0.8rem);
    transition: 200ms;
  }

  #toggle .menu-icon::after {
    content: '';
    position: absolute;
    width: 2.8rem;
    height: 2px;
    background: var(--text);
    transform: translateY(0.8rem);
    transition: 200ms;
  }

  #toggle.active .menu-icon {
    background-color: var(--navbar-bkg);
  }

  #toggle.active .menu-icon::before {
    transform: translateY(0px) rotate(45deg);
  }

  #toggle.active .menu-icon::after {
    transform: translateY(0px) rotate(-45deg);
  }

  span.color-theme {
    display: flex;
    align-items: center;
  }

  span.color-theme > span {
    display: inline;
    margin-right: 1rem;
  }

  /* #navbar ul li span.color-theme {
    padding-top: 0;
  }
  */
}
</style>
