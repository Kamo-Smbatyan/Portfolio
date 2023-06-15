import { useEffect, useRef } from 'react';
import { createBubbleScene } from '../three/create_bubble_scene';
import '../main.css';

const Main = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            createBubbleScene(containerRef.current);
        }
    }, []); // empty dependency array ensures this runs once after initial render

    return (
        <div id='home' className='w-full h-screen text-center relative bg-white overflow-hidden'>
            <div className='w-full h-full text-white mx-auto p-2 flex justify-center items-center absolute z-10'>
                <div className='w-full'>
                    <h1 className='py-4'>Xander Carruth</h1>
                    <h3 className='px-4 md:px-1/5'>I am a software developer working to provide a better education experience by creating <span className='text-salonnblue'>Natural Language Processing</span>, <span className='text-salonnblue'>Full Stack</span>, and <span className='text-salonnblue'>Virtual Reality</span> solutions.</h3>
                </div>
            </div>
            <div id='bubbleRenderer' ref={containerRef} className='w-full h-full absolute z-0'></div>
        </div>
    );
};

export default Main;
