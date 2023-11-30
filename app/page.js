"use client";
import Script from 'next/script'
import Hero from '../components/hero'
import About from '../components/about'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Footer from '../components/footer'


export default function Home() {
  
  return (
    <div>
      <Script src="https://kit.fontawesome.com/31648746d6.js" crossorigin="anonymous"></Script>

      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>

    </div>
  )
}
