'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Bubble from '@public/logo.png';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Sidebar from './Sidebar';

const Navbar = () => {
   const [nav, setNav] = useState(false);
   const [shadow, setShadow] = useState(false);

   const handleNav = () => {
      setNav(!nav);
   };

   useEffect(() => {
      console.log('navbar run');
      const handleShadow = () => {
         if (window.scrollY >= 90) {
            setShadow(true);
         } else {
            setShadow(false);
         }
      };
      window.addEventListener('scroll', handleShadow);
   }, []);

   return (
      <div className="bg-[#242424] bg-opacity-85 w-full h-16 fixed top-0 z-[100]">
         <div className="flex justify-between items-center text-white w-full h-full px-2 2xl:px-16">
            <button className="flex items-center">
                  <Image src={Bubble} alt="Portfolio icon" className="mx-2 h-15 w-16" />
                  <h3 className='text-yellow-400 cousor-hand'>Kamo</h3>
            </button>
            <div className="pr-4">
               <ul className="hidden md:flex">
                  <Link href="/">
                     <li className="ml-10 text-sm uppercase nav-item">Home</li>
                  </Link>
                  
                  <Link href="/#projects">
                     <li className="ml-10 text-sm uppercase nav-item">Projects</li>
                  </Link>
                  <Link href="/#contact">
                     <li className="ml-10 text-sm uppercase nav-item">Contact</li>
                  </Link>
                  <Link href="/blog-home">
                     <li className="ml-10 text-sm uppercase nav-item">Blog</li>
                  </Link>
               </ul>
               <div className="md:hidden">
                  <AiOutlineMenu onClick={handleNav} size={25} />
               </div>
            </div>
         </div>
         <Sidebar nav={nav} handleNav={handleNav} />
      </div>
   );
};

export default Navbar;
