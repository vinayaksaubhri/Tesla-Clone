import firebase from 'firebase';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAVCrCpJHZ-E9w4WKWJZBpJE73XgUSKHHk',
  authDomain: 'tesla-clone-4f8b3.firebaseapp.com',
  projectId: 'tesla-clone-4f8b3',
  storageBucket: 'tesla-clone-4f8b3.appspot.com',
  messagingSenderId: '502306092946',
  appId: '1:502306092946:web:f46209683ba753bb50f34b',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
