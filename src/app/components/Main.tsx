import { useEffect, useRef } from 'react';
import { createBubbleScene } from '../three/BubbleScene';

const Main = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            createBubbleScene(containerRef.current);
        }
    }, []); // empty dependency array ensures this runs once after initial render

    return (
        <div id='home' className='w-full h-screen text-center relative overflow-hidden'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center absolute z-10'>
                <div>
                    <p></p>
                    <h1 className='py-4 text-gray-700'></h1>
                </div>
            </div>
            <div ref={containerRef} className='w-full h-full absolute z-0'></div>
        </div>
    );
};

export default Main;
