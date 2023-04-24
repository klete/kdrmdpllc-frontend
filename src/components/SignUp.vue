<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div
    id="modal-signup"
    class="modal"
    :class="{ fadeIn: isActive, fadeOut: !isActive }"
  >
    <div class="modal-content">
      <h4>Sign Up</h4>
      <br />
      <form id="signup-form" @submit.prevent="handleSubmit">
        <div class="input-field">
          <input type="email" id="signup-email" v-model="email" required />
          <label for="signup-email" :class="{ open: emailHasData }">
            Email address
          </label>
        </div>
        <div class="input-field">
          <input
            type="password"
            id="signup-password"
            v-model="password"
            required
          />
          <label for="signup-password" :class="{ open: passwordHasData }">
            Your password
          </label>
        </div>
        <br />
        <button class="btn form-btn-bkg">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import FlashMessageService from '../services/FlashMessageService'
import firebaseApp from '../firebase/config.js'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(firebaseApp)

export default {
  props: ['isActive'],
  emits: ['close'],
  setup(_, context) {
    const email = ref('')
    const password = ref('')
    const emailHasData = computed(() => email.value.length)
    const passwordHasData = computed(() => password.value.length)
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        // const userCredential = await createUserWithEmailAndPassword(
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        // const user = userCredential.user
        // console.log(user)
        context.emit('close')
        router.push({ name: 'Welcome' })
      } catch (error) {
        console.log(error)

        if (error.code) {
          const errorCode = error.code
          const errorMessage = error.message

          let _errorMessage = null

          switch (error.code) {
            case 'auth/wrong-password':
              _errorMessage = 'Please check your password and try again.'
              break
            case 'auth/user-not-found':
              _errorMessage = 'Please check your email address and try again.'
              break
            case 'auth/expired-action-code':
              _errorMessage = 'Action code has expired.'
              break
            case 'auth/invalid-action-code':
              _errorMessage = 'Malformed code.'
              break
            case 'auth/user-disabled':
              _errorMessage = 'User has been disabled.'
              break

            default:
              _errorMessage = 'An undefined error occurred.'
          }

          FlashMessageService.setMessage(_errorMessage)

          console.log(errorCode)
          console.log(errorMessage)
          console.log(_errorMessage)
        } else {
          router.push({ name: 'NetworkError' })
        }
      }
    }

    return {
      email,
      password,
      emailHasData,
      passwordHasData,
      handleSubmit,
    }
  },
}

/*
https://firebase.google.com/docs/reference/js/v8/firebase.auth.AuthError

Common Error Codes

auth/account-exists-with-different-credential
    Thrown if there already exists an account with the email address asserted by the credential. Resolve this by calling firebase.auth.Auth.fetchSignInMethodsForEmail with the error.email and then asking the user to sign in using one of the returned providers. Once the user is signed in, the original credential retrieved from the error.credential can be linked to the user with firebase.User.linkWithCredential to prevent the user from signing in again to the original provider via popup or redirect. If you are using redirects for sign in, save the credential in session storage and then retrieve on redirect and repopulate the credential using for example firebase.auth.GoogleAuthProvider.credential depending on the credential provider id and complete the link.
auth/credential-already-in-use
    Thrown if the account corresponding to the credential already exists among your users, or is already linked to a Firebase User. For example, this error could be thrown if you are upgrading an anonymous user to a Google user by linking a Google credential to it and the Google credential used is already associated with an existing Firebase Google user. The fields error.email, error.phoneNumber, and error.credential (firebase.auth.AuthCredential) may be provided, depending on the type of credential. You can recover from this error by signing in with error.credential directly via firebase.auth.Auth.signInWithCredential.
auth/email-already-in-use
    Thrown if the email corresponding to the credential already exists among your users. When thrown while linking a credential to an existing user, an error.email and error.credential (firebase.auth.AuthCredential) fields are also provided. You have to link the credential to the existing user with that email if you wish to continue signing in with that credential. To do so, call firebase.auth.Auth.fetchSignInMethodsForEmail, sign in to error.email via one of the providers returned and then firebase.User.linkWithCredential the original credential to that newly signed in user. 
*/
</script>

<style scoped>
.modal {
  background-color: hsl(var(--form-bkg));
  color: hsl(var(--form-text));
}

.modal h4 {
  font-size: 3.4rem;
  line-height: 1.3;
  font-weight: 400;
  margin: 0 0 0.912rem 0;
}

.modal .modal-content {
  padding: 2.4rem;
}

.modal .modal-content form {
  margin-bottom: 1rem;
}

.input-field {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.input-field > label {
  color: var(--form-text);
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.6rem;
  cursor: text;
  transition: transform 0.2s ease-out, color 0.2s ease-out;
  transform-origin: 0% 100%;
  text-align: initial;
  transform: translateY(1.2rem);
}

input[type='password'],
input[type='email'] {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid hsl(var(--form-text));
  border-radius: 0;
  outline: none;
  height: 4.5rem;
  width: 100%;
  font-size: 1.6rem;
  margin: 0 0 1rem 0;
  padding: 0;
  box-shadow: none;
  box-sizing: content-box;
  transition: box-shadow 0.3s, border 0.3s;
}

input[type='password']:focus,
input[type='email']:focus {
  border-bottom: 1px solid hsl(var(--form-text));
  box-shadow: 0 1px 0 0 hsl(var(--form-text));
}

.input-field > label.open,
.input-field > input[type='email']:focus + label,
.input-field > input[type='password']:focus + label,
.input-field > input[type='password']:valid + label,
.input-field > input[type='email']:valid + label {
  transform: translateY(-1.5rem) scale(0.8);
}

button {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

.btn {
  display: inline-block;
  text-decoration: none;
  color: hsl(var(--form-btn-text));
  background-color: hsl(var(--form-btn-bkg));

  height: 3.6rem;
  padding: 0 1.6rem;
  line-height: 3.6rem;
  text-align: center;

  font-size: 1.4rem;
  border-radius: 1rem;

  letter-spacing: 0.5px;
  outline: 0;
  border: none;
  text-transform: uppercase;
  vertical-align: middle;

  transition: background-color 0.2s ease-out;
  cursor: pointer;

  -webkit-tap-highlight-color: transparent;
}

/* Change autocomplete styles in WebKit */
#signup-form input:-webkit-autofill,
#signup-form input:-webkit-autofill:hover,
#signup-form input:-webkit-autofill:focus,
#signup-form textarea:-webkit-autofill,
#signup-form textarea:-webkit-autofill:hover,
#signup-form textarea:-webkit-autofill:focus,
#signup-form select:-webkit-autofill,
#signup-form select:-webkit-autofill:hover,
#signup-form select:-webkit-autofill:focus {
  /* border: 1px solid var(--color3); */
  border-bottom-color: hsl(var(--form-text));
  -webkit-text-fill-color: hsl(var(--form-text));
  -webkit-box-shadow: 0 0 0px 1000px hsl(var(--form-bkg)) inset;
  box-shadow: 0 0 0px 1000px hsl(var(--form-bkg)) inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
