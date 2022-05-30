import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDVdC0ZgBSKVTWQfEkiEG_Ynd6-bOw1j0E",
  authDomain: "cartes-21810.firebaseapp.com",
  projectId: "cartes-21810",
  storageBucket: "cartes-21810.appspot.com",
  messagingSenderId: "467106847225",
  appId: "1:467106847225:web:0ceff90e9e3a13f8bbc528",
  measurementId: "G-5KPEJNLSRQ"
};
function writeData(){
    firebase.database().ref("User").set({
        name:document.getElementById("nom"). value,
        age:document.getElementById("text").value
    });
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);