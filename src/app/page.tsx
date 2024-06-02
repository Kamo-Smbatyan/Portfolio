'use client';
import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import Contact from '../components/Contact';

export default function Home() {
   useEffect(() => {
      if (typeof window !== 'undefined') {
         smoothscroll.polyfill();
         window.__forceSmoothScrollPolyfill__ = true;
      }
   }, []);
   return (
      <div>
         <Navbar />
         <Main />
         <About />
         <Projects />
         <Contact />
      </div>
   );
}
