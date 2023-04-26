<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div
    id="modal-login"
    class="modal"
    :class="{ fadeIn: isActive, fadeOut: !isActive }"
  >
    <div class="modal-content">
      <h4>Login</h4>
      <br />
      <form id="login-form" @submit.prevent="handleSubmit" class="form">
        <div class="input-field">
          <input type="email" id="login-email" v-model="email" required />
          <label for="login-email" :class="{ open: emailHasData }">
            Email address
          </label>
        </div>
        <div class="input-field">
          <input
            type="password"
            id="login-password"
            v-model="password"
            required
          />
          <label for="login-password" :class="{ open: passwordHasData }">
            Your password
          </label>
        </div>

        <button type="submit" class="btn form-btn btn-wide">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import firebaseApp from '../firebase/config.js'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import FlashMessageService from '../services/FlashMessageService'

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
        await signInWithEmailAndPassword(auth, email.value, password.value)
        // const user = userCredential.user
        context.emit('close')
        FlashMessageService.setMessage('Login was successful!')
        router.push({ name: 'Dashboard' })
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

auth/claims-too-large 	            The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.
auth/email-already-exists 	        The provided email is already in use by an existing user. Each user must have a unique email.
auth/id-token-expired 	            The provided Firebase ID token is expired.
auth/id-token-revoked 	            The Firebase ID token has been revoked.
auth/insufficient-permission 	      The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource. Refer to Set up a Firebase project for documentation on how to generate a credential with appropriate permissions and use it to authenticate the Admin SDKs.
auth/internal-error 	              The Authentication server encountered an unexpected error while trying to process the request. The error message should contain the response from the Authentication server containing additional information. If the error persists, please report the problem to our Bug Report support channel.
auth/invalid-argument 	An invalid argument was provided to an Authentication method. The error message should contain additional information.
auth/invalid-claims 	The custom claim attributes provided to setCustomUserClaims() are invalid.
auth/invalid-continue-uri 	The continue URL must be a valid URL string.
auth/invalid-creation-time 	The creation time must be a valid UTC date string.
auth/invalid-credential 	The credential used to authenticate the Admin SDKs cannot be used to perform the desired action. Certain Authentication methods such as createCustomToken() and verifyIdToken() require the SDK to be initialized with a certificate credential as opposed to a refresh token or Application Default credential. See Initialize the SDK for documentation on how to authenticate the Admin SDKs with a certificate credential.
auth/invalid-disabled-field 	The provided value for the disabled user property is invalid. It must be a boolean.
auth/invalid-display-name 	The provided value for the displayName user property is invalid. It must be a non-empty string.
auth/invalid-dynamic-link-domain 	The provided dynamic link domain is not configured or authorized for the current project.
auth/invalid-email 	The provided value for the email user property is invalid. It must be a string email address.
auth/invalid-email-verified 	The provided value for the emailVerified user property is invalid. It must be a boolean.
auth/invalid-hash-algorithm 	The hash algorithm must match one of the strings in the list of supported algorithms.
auth/invalid-hash-block-size 	The hash block size must be a valid number.
auth/invalid-hash-derived-key-length 	The hash derived key length must be a valid number.
auth/invalid-hash-key 	The hash key must a valid byte buffer.
auth/invalid-hash-memory-cost 	The hash memory cost must be a valid number.
auth/invalid-hash-parallelization 	The hash parallelization must be a valid number.
auth/invalid-hash-rounds 	The hash rounds must be a valid number.
auth/invalid-hash-salt-separator 	The hashing algorithm salt separator field must be a valid byte buffer.
auth/invalid-id-token 	The provided ID token is not a valid Firebase ID token.
auth/invalid-last-sign-in-time 	The last sign-in time must be a valid UTC date string.
auth/invalid-page-token 	The provided next page token in listUsers() is invalid. It must be a valid non-empty string.
auth/invalid-password 	The provided value for the password user property is invalid. It must be a string with at least six characters.
auth/invalid-password-hash 	The password hash must be a valid byte buffer.
auth/invalid-password-salt 	The password salt must be a valid byte buffer
auth/invalid-phone-number 	The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.
auth/invalid-photo-url 	The provided value for the photoURL user property is invalid. It must be a string URL.
auth/invalid-provider-data 	The providerData must be a valid array of UserInfo objects.
auth/invalid-provider-id 	The providerId must be a valid supported provider identifier string.
auth/invalid-oauth-responsetype 	Only exactly one OAuth responseType should be set to true.
auth/invalid-session-cookie-duration 	The session cookie duration must be a valid number in milliseconds between 5 minutes and 2 weeks.
auth/invalid-uid 	The provided uid must be a non-empty string with at most 128 characters.
auth/invalid-user-import 	The user record to import is invalid.
auth/maximum-user-count-exceeded 	The maximum allowed number of users to import has been exceeded.
auth/missing-android-pkg-name 	An Android Package Name must be provided if the Android App is required to be installed.
auth/missing-continue-uri 	A valid continue URL must be provided in the request.
auth/missing-hash-algorithm 	Importing users with password hashes requires that the hashing algorithm and its parameters be provided.
auth/missing-ios-bundle-id 	The request is missing a Bundle ID.
auth/missing-uid 	A uid identifier is required for the current operation.
auth/missing-oauth-client-secret 	The OAuth configuration client secret is required to enable OIDC code flow.
auth/operation-not-allowed 	The provided sign-in provider is disabled for your Firebase project. Enable it from the Sign-in Method section of the Firebase console.
auth/phone-number-already-exists 	The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.
auth/project-not-found 	No Firebase project was found for the credential used to initialize the Admin SDKs. Refer to Set up a Firebase project for documentation on how to generate a credential for your project and use it to authenticate the Admin SDKs.
auth/reserved-claims 	One or more custom user claims provided to setCustomUserClaims() are reserved. For example, OIDC specific claims such as (sub, iat, iss, exp, aud, auth_time, etc) should not be used as keys for custom claims.
auth/session-cookie-expired 	The provided Firebase session cookie is expired.
auth/session-cookie-revoked 	The Firebase session cookie has been revoked.
auth/uid-already-exists 	The provided uid is already in use by an existing user. Each user must have a unique uid.
auth/unauthorized-continue-uri 	The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase Console.
auth/user-not-found 	There is no existing user record corresponding to the provided identifier. 
*/
</script>

<style scoped>
.modal {
  background-color: var(--form-bkg);
  color: var(--form-text);
}

.modal h4 {
  font-size: 3.4rem;
  line-height: 1.3;
  font-weight: 400;
  margin: 0 0 0.5rem 0;
}

.modal .modal-content {
  padding: 2.4rem;
}

.modal .modal-content form {
  margin-bottom: 1rem;
}

.input-field {
  position: relative;
}
.input-field + .input-field {
  margin-block: 2rem 1rem;
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

.input-field > label.open,
.input-field > input[type='email']:focus + label,
.input-field > input[type='password']:focus + label,
.input-field > input[type='password']:valid + label,
.input-field > input[type='email']:valid + label {
  transform: translateY(-1.5rem) scale(0.8);
}
</style>
