import React from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Portfolio from './Portfolio'
import ProjectProgress from './ProjectProgress'
import Services from './Services'

const Index = () => {
  return (
    <section className='overflow-hidden py-10 md:py-16 transition-all'>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <ProjectProgress />
      <Contact />
    </section>
  )
}

export default Index
