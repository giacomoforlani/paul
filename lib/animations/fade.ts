import { Variants } from 'framer-motion';

const fade: Variants = {
  fadeIn: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  fadeOut: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

export { fade };
