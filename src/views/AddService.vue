<template>
  <section>
    <h3>
      Add Record
    </h3>

    <div>Records added: {{ index }}</div>
    <!-- <div>
      <button @click="addRecord">Add Record ({{ index }})</button>
    </div> -->
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useFirestore } from 'vuefire'
import { doc, setDoc } from 'firebase/firestore'
import { doses } from '@/assets/data/doses.json'
import { therapies } from '@/assets/data/therapies.json'
import { substrates, elements } from '@/assets/data/therapy_elements.json'

const db = useFirestore()
var index = ref(0)
var isLive = false

// const collection = 'doses'
// const collection = 'substrates'
// const collection = 'elements'
const collection = 'therapies'

let records = therapies

// console.log(records)

for (let record in records) {
  let key = record
  let item = records[record]

  console.log(key)
  console.log(item)

  if (isLive) {
    addRecord(key, item)
    console.log('add record')
    index.value += 1
  }
}

async function addRecord(key, item) {
  try {
    await setDoc(doc(db, collection, key), {
      // record_id: item.id,
      ...item,
    })
    console.log(response)
  } catch (err) {
    console.log(err)
  }
}
</script>

<style scoped>
section {
  margin: 2rem 2rem;
  padding: 0rem 1rem 1rem;
  max-width: 100%;
  overflow-x: auto;
  background-color: hsl(276 100% 19% / 0.2);
}

h3 {
  background: hsl(276 100% 19%);
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 1rem;
  text-align: left;
  margin: 1rem 0 2rem 0;
  color: white;
  font-weight: 600;
}
</style>
