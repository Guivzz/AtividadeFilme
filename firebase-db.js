// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWBnqT2ihGTImFvRagqCaE6vT8sCdYB4E",
    authDomain: "filmes-atividade.firebaseapp.com",
    databaseURL: "https://filmes-atividade-default-rtdb.firebaseio.com",
    projectId: "filmes-atividade",
    storageBucket: "filmes-atividade.appspot.com",
    messagingSenderId: "620322745029",
    appId: "1:620322745029:web:8b4db7bf6ff3e7fcbd9eac"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);

export default database


