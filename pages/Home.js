import React from "react"
import Head from 'next/head'

import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Service from "../components/Service";
import About from "../components/About";
import Footer from "../components/Footer";

export default function LandingPage() {
 
  return (
    <>
    <Head>
    <title>SAPATOS</title>
    <link rel="icon" href="/Sapatos.svg" />
    </Head>
    
    <Layout pageTitle="SAPATOS">
      <Header />
      <Hero />
      <Feature />
      <Service />
      <About />
      <Footer />
    </Layout>
    </>
  );
}
