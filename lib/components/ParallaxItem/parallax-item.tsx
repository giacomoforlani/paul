import React, {
  PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';

import { motion } from 'framer-motion';

type ParallaxItemProps = PropsWithChildren<PropsWithClass<{
  speed: number;
}>>;

const ParallaxItem = ({
  children,
  className,
  speed,
  ...attributes
}: ParallaxItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(process.browser ? window.pageYOffset : 0);

  const y = useMemo(
    () => scroll * speed,
    [scroll, speed],
  );

  const onWindowScroll = useCallback(() => {
    setScroll(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
    return () => window.removeEventListener('scroll', onWindowScroll);
  }, [onWindowScroll]);

  return (
    <motion.div
      className={className}
      ref={ref}
      animate={{ y }}
      transition={{ type: 'spring', stiffness: 20 }}
      {...attributes}
    >
      {children}
    </motion.div>
  );
};

export { ParallaxItem };
