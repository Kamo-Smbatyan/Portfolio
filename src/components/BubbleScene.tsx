import { useEffect, useRef } from 'react';
import { createBubbleScene } from './three/createBubbleScene';

const BubbleScene = () => {
   const containerRef = useRef<HTMLDivElement | null>(null);
   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
   const cleanupRef = useRef<() => void>(() => {});

   useEffect(() => {
      if (containerRef.current && !rendererRef.current) {
         const { renderer, cleanup } = createBubbleScene(containerRef.current);
         rendererRef.current = renderer;
         cleanupRef.current = cleanup;
      }

      return () => {
         if (rendererRef.current) {
            cleanupRef.current();
            containerRef.current?.removeChild(rendererRef.current.domElement);
            rendererRef.current.dispose();
            rendererRef.current = null;
         }
      };
   }, []);

   return <div className="w-full h-screen absolute z-0" ref={containerRef} />;
};

export default BubbleScene;
