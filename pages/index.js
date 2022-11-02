import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect, StrictMode } from "react";
import Animation from "./Animation"
import {useRouter} from 'next/router'

const LOADING_STYLE = {
  position: 'fixed',
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%'
}

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);
  const router = useRouter();

  const delay = async (ms) => {
    return new Promise((resolve) => {
      return setTimeout(resolve, ms);
    });
  };

  useEffect(() => {
    delay(300).then(() => setShowLoader(true));
    delay(5000).then(() => setShowLoader(false));
    setTimeout(() => {
     router.push('/Home');
    }, 5000)
  }, []);

  return (
    
    <div style={{background: "#173646"}}>
        <div className={styles.container}>
        <Head>
        <title>SAPATOS</title>
        <link rel="icon" href="/Sapatos.svg" />
        </Head>
        <div style={LOADING_STYLE}>
        {(showLoader && <Animation />) || null}
        </div>
    </div>
    </div>
    
  )
}
