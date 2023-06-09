import { ref } from 'vue'
import firebaseApp from '../firebase/config.js'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(firebaseApp)
const error = ref(null)

const logout = async () => {
  error.value = null

  try {
    await signOut(auth)
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useLogout = () => {
  return { logout, error }
}

export default useLogout
