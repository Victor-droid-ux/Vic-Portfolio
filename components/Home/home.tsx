import React from 'react'
import Hero from './Hero/Hero';
import About from './About/About'; 
import Services from './Services/Services';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills'
import Reviews from './Reviews/Reviews';
import Sliders from './Reviews/Sliders'
const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        <Skills/>
        < Reviews/>
        < Sliders/>

    </div>
  )
}

export default Home