import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * BlurFade - Magic UI Component (Adaptado)
 * Animação sutil de entrada com blur leve e transição refinada.
 */
export function BlurFade({
  children,
  className = '',
  variant,
  duration = 0.45,
  delay = 0,
  offset = 8,
  direction = 'down',
  inView = true,
  inViewMargin = '-40px',
  blur = '4px',
}) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  const defaultVariants = {
    hidden: {
      [direction === 'left' || direction === 'right' ? 'x' : 'y']:
        direction === 'right' || direction === 'down' ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [direction === 'left' || direction === 'right' ? 'x' : 'y']: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={combinedVariants}
      transition={{
        delay: 0.03 + delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default BlurFade;
