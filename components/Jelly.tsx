'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Jelly({ className, children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scalePeriod, setScalePeriod] = useState<number>(0);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    const observer = new ResizeObserver(updatePeriod);
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);

  const updatePeriod = () => {
    const element = wrapperRef.current;
    if (!element) return;
    const { width } = element.getBoundingClientRect();
    setScalePeriod(1 - (width - 8) / width);
  };

  return (
    <motion.div
      className={className}
      whileTap={{ scale: 1 - scalePeriod }}
      whileHover={{ scale: 1 + scalePeriod }}
      transition={{ duration: 0.3, type: 'spring' }}
      ref={wrapperRef}
    >
      {children}
    </motion.div>
  );
}
