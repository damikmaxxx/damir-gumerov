'use client';

import { createContext, useContext, useState } from 'react';
import { useMotionValue, MotionValue } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface AnimationContextType {
  hasPlayed: boolean;
  setHasPlayed: (v: boolean) => void;
  rotation: MotionValue<number>;
}

const AnimationContext = createContext<AnimationContextType | null>(null);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [hasPlayed, setHasPlayed] = useState(pathname !== '/');
  
  const rotation = useMotionValue(hasPlayed ? 360 : 0);

  return (
    <AnimationContext.Provider value={{ hasPlayed, setHasPlayed, rotation }}>
      {children}
    </AnimationContext.Provider>
  );
}

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (!context) throw new Error("Context error");
  return context;
};