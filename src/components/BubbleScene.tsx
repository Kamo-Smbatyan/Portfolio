import { useEffect, useRef, useState } from 'react';
import { createBubbleScene } from './three/createBubbleScene';
import { cx } from '@src/utils';

const BubbleScene = () => {
   const containerRef = useRef<HTMLDivElement | null>(null);
   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
   const cleanupRef = useRef<() => void>(() => {});
   const [rendered, setRendered] = useState(false);

   useEffect(() => {
      if (containerRef.current && !rendererRef.current) {
         const { renderer, cleanup } = createBubbleScene(containerRef.current);
         rendererRef.current = renderer;
         cleanupRef.current = cleanup;
         setRendered(true);
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

   return (
      <div className={cx('w-full h-[100vh] absolute z-0', rendered ? 'bg-off-white' : 'bg-black')} ref={containerRef} />
   );
};

export default BubbleScene;
