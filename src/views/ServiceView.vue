<template>
  <section v-if="selectedService">
    <h3>
      <router-link
        :to="{
          name: 'ServicesView',
        }"
      >
        Services
      </router-link>
      > {{ selectedService.name }}
    </h3>
    <nav>
      <router-link
        :to="{
          name: 'EditService',
          params: { id: `${id}` },
        }"
      >
        Edit
      </router-link>
    </nav>
    <ul>
      <li v-for="therapy in selectedService.therapies" :key="therapy.id">
        <router-link
          :to="{
            name: 'TherapyView',
            params: { id: `${therapy.id}` },
          }"
        >
          {{ therapy.name }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useFirestore } from 'vuefire'
import { doc, getDoc } from 'firebase/firestore'
import { ref } from 'vue'
const db = useFirestore()
const props = defineProps(['id'])
const selectedService = ref(null)

const docRef = doc(db, 'services', String(props.id))

async function getService() {
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    selectedService.value = docSnap.data()
    console.log('Document data:', docSnap.data())
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!')
  }
}

getService()
</script>

<style scoped>
section {
  margin: 1rem 2rem;
}

a {
  color: white;
}
a:hover {
  text-decoration: underline;
}

ul {
  list-style-type: none;
}
</style>
