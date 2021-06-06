import React, { useEffect, useState } from 'react';

import styles from './cursor.module.scss';

const Cursor = () => {
  const [outPos, setOutPos] = useState({ top: 0, left: 0 });
  const [inPos, setInPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const { clientY: top, clientX: left } = event;

      setOutPos({ top, left });
      setTimeout(() => setInPos({ top, left }), 100);
    };

    document.addEventListener('mousemove', listener);

    return () => document.removeEventListener('mousemove', listener);
  }, []);

  return (
    <>
      <div
        className={styles.Cursor__Out}
        style={{ ...outPos }}
      />
      <div
        className={styles.Cursor__In}
        style={{ ...inPos }}
      />
    </>
  );
};

export { Cursor };
