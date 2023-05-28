import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}
// const firebaseConfig = {
//   apiKey: 'AIzaSyCOkaCEV9DV7t_FofZmTlEdifYUROzXxcg',
//   authDomain: 'rptm-2923a.firebaseapp.com',
//   projectId: 'rptm-2923a',
//   storageBucket: 'rptm-2923a.appspot.com',
//   messagingSenderId: '101564066493',
//   appId: '1:101564066493:web:a919600ec3892f2012a5d4',
// }

const app = initializeApp(firebaseConfig)

export default app
