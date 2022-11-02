//for firebase
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAWrWkPG-V0_kgbhaHGly-9lb3G_aw6jF8",
  authDomain: "final-project-presh.firebaseapp.com",
  projectId: "final-project-presh",
  storageBucket: "final-project-presh.appspot.com",
  messagingSenderId: "916766142871",
  appId: "1:916766142871:web:161512b913ce57dbcd14d2"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const storage = getStorage(app);
export const Firebaseauth = createContext();

export default function Firebaseprovider(props) {
  const [isloggedin, setloggedin] = useState(false);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setloggedin(true);
          console.log(user);
      } else {
        setloggedin(false);
      }
    });
  },[setloggedin]);

  
  return (
    <Firebaseauth.Provider value={{auth, isloggedin, setloggedin}}> {props.children} </Firebaseauth.Provider> 
  )
}

