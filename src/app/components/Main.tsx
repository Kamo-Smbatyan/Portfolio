import { useEffect, useRef } from 'react';
import BubbleScene from '../three/mainBubble';

const Main = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const bubbleSceneRef = useRef<BubbleScene | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        bubbleSceneRef.current = new BubbleScene(containerRef.current);
        bubbleSceneRef.current.animate();

        return () => {
            if (bubbleSceneRef.current) {
                bubbleSceneRef.current = null;
            }
        };
    }, []);

    return (
        <div id='home' className='w-full h-screen text-center relative overflow-hidden'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center absolute z-10'>
                <div>
                    <p>Lorem Ipsum Dolor</p>
                    <h1 className='py-4 text-gray-700'>Xander Carruth Portfolio Site</h1>
                </div>
            </div>
            <div ref={containerRef} className='w-full h-full absolute z-0'></div>
        </div>
    );
};

export default Main;
