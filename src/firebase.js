// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAu9dwdcIgzz07y7bUm_il5jaX5L_MzcXo',
    authDomain: 'dashboard-381117.firebaseapp.com',
    projectId: 'dashboard-381117',
    storageBucket: 'dashboard-381117.appspot.com',
    messagingSenderId: '1024733778285',
    appId: '1:1024733778285:web:28f394af77282af948ca64',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
