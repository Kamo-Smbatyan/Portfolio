'use client';
import Image from 'next/image'
import Head from 'next/head'
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
