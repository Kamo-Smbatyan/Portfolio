import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

type SidebarProps = {
   nav: boolean;
   handleNav: (isOpen: boolean) => void;
};

export default function Sidebar({ nav, handleNav }: SidebarProps) {
   const mto = 'mailto:';
   const em = 'acarruth2018@gmail.com';

   return (
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
         <div
            className={
               `fixed top-0 h-screen bg-[#242424] p-10 ease-in duration-300 z-[60] ` +
               (nav ? 'left-0 w-[75%]' : 'left-[-75%] w-[75%]')
            }>
            <div>
               <div className="flex w-full text-white items-end justify-end">
                  <AiOutlineClose onClick={() => handleNav(false)} />
               </div>
            </div>
            <div className="py-4 text-white flex flex-col">
               <ul className="uppercase">
                  <Link href="/">
                     <li onClick={() => handleNav(false)} className="py-4 text-sm">
                        <span className="hover:border-b">Home</span>
                     </li>
                  </Link>
                  <Link href="/#about">
                     <li onClick={() => handleNav(false)} className="py-4 text-sm">
                        <span className="hover:border-b">About</span>
                     </li>
                  </Link>
                  <Link href="/#projects">
                     <li onClick={() => handleNav(false)} className="py-4 text-sm">
                        <span className="hover:border-b">Projects</span>
                     </li>
                  </Link>
                  <Link href="/#contact">
                     <li onClick={() => handleNav(false)} className="py-4 text-sm">
                        <span className="hover:border-b">Contact</span>
                     </li>
                  </Link>
                  <Link href="/blog-home">
                     <li onClick={() => handleNav(false)} className="py-4 text-sm">
                        <span className="hover:border-b">Blog</span>
                     </li>
                  </Link>
               </ul>
               <div className="pt-40">
                  <p className="uppercase tracking-widest">Let&apos;s Connect</p>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                     <div className="rounded-full border-gray-800 border-2 shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <a href="https://www.linkedin.com/in/xander-carruth/" target="_blank" rel="noopener noreferrer">
                           <FaLinkedinIn />
                        </a>
                     </div>
                     <div className="rounded-full border-gray-800 border-2 shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <a href="https://github.com/xander-carruth/" target="_blank" rel="noopener noreferrer">
                           <FaGithub />
                        </a>
                     </div>
                     <div className="rounded-full border-gray-800 border-2 shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <a href={`${mto}${em}`} target="_blank" rel="noopener noreferrer">
                           <AiOutlineMail />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
