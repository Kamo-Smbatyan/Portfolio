import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(()=> {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, [])

    const mto = "mailto:";
    const em = "acarruth2018@gmail.com";

    return (
        <div className='bg-[#242424] bg-opacity-85 fixed w-full h-15 z-[100]'>
            <div className='flex justify-between items-center text-white w-full h-full px-2 2xl:px-16'>
                <p>Xander Carruth</p>
                <div className='pr-4'>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div className='md:hidden'>
                        <AiOutlineMenu onClick={handleNav} size={(25)} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ?
                'fixed left-0 top-0 w-[75%] sm:w-[60%] m:w-[45%] h-screen bg-[#242424] p-10 ease-in duration-500' :
                'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full text-white items-end justify-end'>
                            <AiOutlineClose onClick={handleNav} />
                        </div>
                    </div>
                    <div className='py-4 text-white flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'><span className='hover:border-b'>Home</span></li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'><span className='hover:border-b'>About</span></li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'><span className='hover:border-b'>Projects</span></li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'><span className='hover:border-b'>Contact</span></li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest'>Let's Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full border-gray-800 border-2 shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href="https://www.linkedin.com/in/xander-carruth/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                                </div>
                                <div className='rounded-full border-gray-800 border-2 shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href="https://github.com/xander-carruth/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                </div>
                                <div className='rounded-full border-gray-800 border-2 shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href={`${mto}${em}`} target="_blank" rel="noopener noreferrer"><AiOutlineMail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;