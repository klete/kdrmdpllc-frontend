<template>
  <router-link
    v-if="therapyId"
    :to="{
      name: 'TherapyView',
      params: { id: therapyId },
    }"
  >
    {{ therapy?.name }}
  </router-link>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useFirestore, useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const props = defineProps(['colIndex', 'rowIndex', 'serviceIndex'])

const db = useFirestore()

const therapyId = ref(null)
const therapy = ref(null)

const targets = useCollection(collection(db, 'targets'))
const therapy_values = useCollection(collection(db, 'therapies'))

watchEffect(function initializeData() {
  therapyId.value =
    targets.value[+props.colIndex].services[+props.serviceIndex].therapies[
      +props.rowIndex
    ]

  console.log(therapyId.value)

  therapy.value = null

  if (therapyId.value) {
    therapy.value = therapy_values.value.find((t) => {
      return +t.record_id == +therapyId.value
    })

    // if (!therapy.value) {
    //   console.log(`Therapy element for ${therapyId.value} was not found.`)
    // }
  } else {
    therapy.value = null
  }
})
</script>

<style scoped></style>
