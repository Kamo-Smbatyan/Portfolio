import { useEffect, useRef } from 'react';
import { createBubbleScene } from '../three/createBubbleScene';

const BubbleScene = () => {
   const containerRef = useRef<HTMLDivElement | null>(null);
   const initializedRef = useRef(false);
   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

   useEffect(() => {
      if (!initializedRef.current && containerRef.current) {
         const { renderer } = createBubbleScene(containerRef.current);
         rendererRef.current = renderer;
         initializedRef.current = true;
      }
   }, []);

   return <div className="w-full h-screen absolute z-0" ref={containerRef} />;
};

export default BubbleScene;
