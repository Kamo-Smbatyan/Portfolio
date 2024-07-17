import { useEffect, useRef } from 'react';
import { createBubbleScene } from './three/createBubbleScene';
import '@src/app/main.css';
import { Canvas } from '@react-three/fiber';
import BubbleScene from './BubbleScene';
import Image from 'next/image';

const Main = () => {
   // const containerRef = useRef<HTMLDivElement | null>(null);

   // useEffect(() => {
   //    if (containerRef.current) {
   //       createBubbleScene(containerRef.current);

   //       return () => {
   //          containerRef.current?.removeChild(renderer.domElement);
   //       };
   //    }
   //    console.log('creating bubble scene');
   // }, []);
 
   return (
      <div id="home" className="w-full h-screen text-center relative bg-[#ecf0f3] overflow-hidden">
         <div className="w-full h-full text-white mx-auto p-2 mt-[10vh] sm:mt-[10vh] flex justify-left absolute z-10">
            <div className="w-full">
                  <h2 className="py-4">Hello There!</h2>
                  <h4 className="px-4 md">
                     I am <span className='font-bold'>Kamo Smbatyan</span>, a skilled Full-stack and Blockchain developer, from Armenia.<br></br>
                     Whelcome to my portfolio!<br></br>
                     {"As a skilled full-stack developer, I specialize in creating user-friendly and efficient solutions for web and mobile platforms."}
                     {"I graduated from the National Polytechnic University of Armenia, where I honed my skills in both backend and frontend development. My expertise spans across a variety of frameworks, including PHP and modern JavaScript/TypeScript frameworks, enabling me to create robust and scalable solutions."}
                     {"I design and develop responsive, user-friendly websites and web applications using the latest technologies. From concept to deployment, I provide end-to-end development services, ensuring that your projects are both functional and visually appealing."}
                     {"Explore my projects to see my work in action. Interested in collaborating? Let's get in touch!"}
                  </h4>
            </div>
            <div className="w-full">
               <Image 
                  src = '/assets/avatar/my.jpg'
                  alt = 'My Avatar'
                  width = {500}
                  height= {500}
                  className='border-t-4 border-r-8 border-b-2 border-l-4 border-blue-500 p-1 inline-block rounded-2xl'  
               />
            </div>
         </div>
         {/* <div id="bubbleRenderer" ref={containerRef} className="w-full h-screen absolute z-0"></div> */}
         <BubbleScene />
      </div>
   );
};

export default Main;
