'use client';
import Image from 'next/image'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Contact from './components/Contact';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Contact />
    </div>
  )
}
