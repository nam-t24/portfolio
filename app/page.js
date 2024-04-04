"use client";
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills';
import Experience from '../components/experience'
import Projects from '../components/projects'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}
