import React, { useEffect, useMemo, useState } from 'react';
import { useMouse } from 'react-use';

import styles from './cursor.module.scss';

const Cursor = () => {
  const cursorRef = React.useRef(null);
  const { docX: left, docY: top } = useMouse(cursorRef);

  const cursorPos = useMemo(() => ({ left, top }), [left, top]);
  const [insidePos, setInsidePos] = useState({ left, top });

  useEffect(() => {
    setTimeout(() => setInsidePos({ left, top }), 100);
  }, [left, top]);

  return (
    <>
      <div
        ref={cursorRef}
        className={[styles.Cursor, styles.Cursor__Out].join(' ')}
        style={{ ...cursorPos }}
      />
      <div
        className={[styles.Cursor, styles.Cursor__In].join(' ')}
        style={{ ...insidePos }}
      />
    </>
  );
};

export { Cursor };
