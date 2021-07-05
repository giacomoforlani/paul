import { TweenLite, Linear } from 'gsap';
import React, {
  useCallback, useRef, useState,
} from 'react';

const OFFSET = 500;
const MULTIPLIER = 1.1;
const DURATION = 0.4;

export const useMoveCursor = (
  bigCursorRef: React.RefObject<HTMLDivElement>,
  smallCursorRef: React.RefObject<HTMLDivElement>,
) => {
  const timeout = useRef<NodeJS.Timeout>();
  const [cursorWidth, setCursorWidth] = useState(0);
  const [prevPos, setPrevPos] = useState({ x: 0, y: 0, time: 0 });

  const animateCursor = useCallback(
    (e: MouseEvent) => {
      if (!bigCursorRef.current) {
        return;
      }

      const currPos = { x: e.clientX, y: e.clientY, time: Date.now() };
      const distance = { x: Math.abs(currPos.x - prevPos.x), y: Math.abs(currPos.y - prevPos.y) };
      const timeDiff = currPos.time - prevPos.time;
      const speed = {
        x: Math.round(distance.x / timeDiff * 1000),
        y: Math.round(distance.y / timeDiff * 1000),
      };

      const isMoving = [speed.x, speed.y].some((n) => n > OFFSET);
      const initialWidth = cursorWidth || bigCursorRef.current.clientWidth;
      const width = isMoving ? initialWidth * MULTIPLIER : initialWidth;
      const rotate = Math.atan2(currPos.y - prevPos.y, currPos.x - prevPos.x) * 180 / Math.PI;

      TweenLite.to(bigCursorRef.current, DURATION, {
        force3D: true,
        x: currPos.x,
        y: currPos.y,
        left: -width / 2,
        width,
      });

      TweenLite.to(bigCursorRef.current, 0, {
        rotate,
      });

      TweenLite.to(smallCursorRef.current, 0, {
        ease: Linear.easeNone,
        force3D: true,
        x: currPos.x,
        y: currPos.y,
      });

      setCursorWidth(initialWidth);
      setPrevPos(currPos);

      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      timeout.current = setTimeout(() => {
        TweenLite.to(bigCursorRef.current, DURATION, {
          left: -initialWidth / 2,
          rotate: 0,
          width: initialWidth,
        });
      }, 100);
    },
    [bigCursorRef, smallCursorRef, prevPos, cursorWidth],
  );

  return animateCursor;
};
