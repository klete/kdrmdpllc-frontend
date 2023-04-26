import { ref } from 'vue'
import firebaseApp from '../firebase/config.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth(firebaseApp)

let user = ref(auth.currentUser)

onAuthStateChanged(auth, (_user) => {
  // console.log('User state change.  Current user is: ')
  // console.log(_user)
  user.value = _user
})

const getUser = () => {
  return { user }
}

export default getUser

// From Udemy: Net Ninja Vue course
