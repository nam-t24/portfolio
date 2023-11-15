"use client";
import Head from 'next/head'
import Script from 'next/script'
import Hero from '../components/hero'
import About from '../components/about'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Footer from '../components/footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Nam Truong | Portfolio</title>
        <meta name="description" content="A student at the University of Texas at Dallas, Nam Truong is an aspiring software engineer." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.png" />
        <meta property="og:type" content="Website" />
        <meta name="image" property="og:image" content="%PUBLIC_URL%/NT_CrownNew.png" />
        <meta name="description" property="og:description" content="A student at the University of Texas at Dallas, Nam Truong is an aspiring software engineer." />
        <meta name="author" content="Nam Truong" />
      </Head>
      <Script src="https://kit.fontawesome.com/31648746d6.js" crossorigin="anonymous"></Script>

      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      {/* <Footer/> */}

    </div>
  )
}
