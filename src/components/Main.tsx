import { useEffect, useRef } from 'react';
import { createBubbleScene } from './three/createBubbleScene';
import '@src/app/main.css';
import { Canvas } from '@react-three/fiber';
import BubbleScene from './BubbleScene';

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
         <div className="w-full h-full text-white mx-auto p-2 mt-[30vh] flex justify-center absolute z-10">
            <div className="w-full">
               <h1 className="py-4">Xander Carruth</h1>
               <h4 className="px-4 md:px-1/5">
                  I am a software developer working to provide a better education experience by creating{' '}
                  <span className="text-salo-blue">Natural Language Processing</span>,{' '}
                  <span className="text-salo-blue">Full Stack</span>, and{' '}
                  <span className="text-salo-blue">Virtual Reality</span> solutions.
               </h4>
            </div>
         </div>
         {/* <div id="bubbleRenderer" ref={containerRef} className="w-full h-screen absolute z-0"></div> */}
         <BubbleScene />
      </div>
   );
};

export default Main;
