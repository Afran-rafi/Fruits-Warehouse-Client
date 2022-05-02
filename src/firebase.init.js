import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

    // apiKey: "AIzaSyC4g0C7qTG8KwBQXlKjw5dPcvBB-x9PEr4",
    // authDomain: "assignment-11-5b872.firebaseapp.com",
    // projectId: "assignment-11-5b872",
    // storageBucket: "assignment-11-5b872.appspot.com",
    // messagingSenderId: "605426509824",
    // appId: "1:605426509824:web:453f93a580adfcc5bf50e5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;