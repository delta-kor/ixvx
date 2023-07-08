'use client';

import { motion } from 'framer-motion';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';

interface Props {
  className?: string;
  small?: boolean;
  onClick?: MouseEventHandler;
  children: React.ReactNode;
}

export default function Jelly({ className, small, onClick, children }: Props) {
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
    setScalePeriod(1 - (width - (small ? 3 : 8)) / width);
  };

  return (
    <motion.div
      className={className}
      whileTap={{ scale: 1 - scalePeriod }}
      whileHover={{ scale: 1 + scalePeriod }}
      transition={{ duration: 0.3, type: 'spring' }}
      onClick={onClick}
      ref={wrapperRef}
    >
      {children}
    </motion.div>
  );
}
