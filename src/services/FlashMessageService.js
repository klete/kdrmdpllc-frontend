import { GStore } from '../store'

var timeout = null

export default {
  setMessage(msg) {
    GStore.flashMessage = msg

    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      GStore.flashMessage = ''
    }, 3000)
  },
  hasMessage: () => {
    return !!GStore.flashMessage
  },
}
