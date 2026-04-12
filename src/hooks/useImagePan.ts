'use client';

import { useRef} from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

interface UseImagePanProps {
  panStrength?: number;
  springStiffness?: number; 
  springDamping?: number;   
}

export const useImagePan = ({
  panStrength = 20, 
  springStiffness = 50,
  springDamping = 30,
}: UseImagePanProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: springStiffness, damping: springDamping });
  const smoothMouseY = useSpring(mouseY, { stiffness: springStiffness, damping: springDamping });

  const x = useTransform(smoothMouseX, [0, 1], [panStrength, -panStrength]);
  const y = useTransform(smoothMouseY, [0, 1], [panStrength, -panStrength]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    const mouseXPos = (e.clientX - left) / width;
    const mouseYPos = (e.clientY - top) / height;

    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5); 
    mouseY.set(0.5);
  };

  return {
    containerRef,
    imageStyle: { x, y }, 
    eventHandlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
};