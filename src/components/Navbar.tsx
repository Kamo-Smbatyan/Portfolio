'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Bubble from '@public/assets/Bubble.png';
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

   const mto = 'mailto:';
   const em = 'acarruth2018@gmail.com';

   return (
      <div className="bg-[#242424] bg-opacity-85 fixed w-full h-15 z-[100]">
         <div className="flex justify-between items-center text-white w-full h-full px-2 2xl:px-16">
            <div className="flex items-center">
               <Image src={Bubble} alt="Portfolio icon" className="mx-2 h-7 w-7" />
               <p>Xander Carruth</p>
            </div>
            <div className="pr-4">
               <ul className="hidden md:flex">
                  <Link href="/">
                     <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                  </Link>
                  <Link href="/#about">
                     <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                  </Link>
                  <Link href="/#projects">
                     <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                  </Link>
                  <Link href="/#contact">
                     <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                  </Link>
                  <Link href="/blog-home">
                     <li className="ml-10 text-sm uppercase hover:border-b">Blog</li>
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
