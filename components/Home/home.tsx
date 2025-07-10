"use client";

import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Reviews from "./Reviews/Reviews";
import Sliders from "./Reviews/Sliders";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import ScrollToTop from "../Helper/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 200,
        delay: 200,
        startEvent: 'DOMContentLoaded',
        anchorPlacement: 'top-bottom',
      })
    }
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Reviews />
      <Sliders />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;