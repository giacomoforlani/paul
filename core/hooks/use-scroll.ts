import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState(process.browser ? window.pageYOffset : 0);

  useEffect(() => {
    const listener = () => {
      setScroll(window.pageYOffset);
    };

    document.addEventListener('scroll', listener);

    return () => document.removeEventListener('scroll', listener);
  });

  return scroll;
};
