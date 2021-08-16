import { TweenLite, Linear } from 'gsap';
import React, {
  useCallback, useRef, useState,
} from 'react';
import { BodyClass, useBodyContext } from '../../../core/services';

const DURATION = 0.4;
const HOVER_MULTIPLIER = 0.8;
const HOVER_TAGS = ['button', 'a', 'svg'];
const MOVE_MULTIPLIER = 1.1;
const OFFSET = 500;

interface MouseInfo {
  isHovering: boolean;
  isMoving: boolean;
  lastUpdate: number;
  x: number;
  y: number;
}

export const useMoveCursor = (
  bigCursorRef: React.RefObject<HTMLDivElement>,
  smallCursorRef: React.RefObject<HTMLDivElement>,
) => {
  const {
    addBodyClass,
    removeBodyClass,
  } = useBodyContext();

  const timeout = useRef<NodeJS.Timeout>();
  const [cursorWidth, setCursorWidth] = useState(0);
  const [cursorInfo, setCursorInfo] = useState<MouseInfo>({
    isHovering: false,
    isMoving: false,
    lastUpdate: 0,
    x: 0,
    y: 0,
  });

  const getMouseInfo = useCallback((
    e: MouseEvent,
  ) => {
    const target = (e.target ?? {}) as HTMLElement;

    const x = e.clientX;
    const y = e.clientY;
    const now = Date.now();

    const distance = {
      x: Math.abs(e.clientX - cursorInfo.x),
      y: Math.abs(e.clientY - cursorInfo.y),
    };

    const timeDiff = now - cursorInfo.lastUpdate;
    const speed = {
      x: Math.round(distance.x / timeDiff * 1000),
      y: Math.round(distance.y / timeDiff * 1000),
    };

    const isMoving = [speed.x, speed.y].some((n) => n > OFFSET);
    const isHovering = HOVER_TAGS.some((tag) => target.closest(tag));

    return {
      isMoving,
      isHovering,
      lastUpdate: now,
      x,
      y,
    };
  }, [cursorInfo.lastUpdate, cursorInfo.x, cursorInfo.y]);

  const animateCursor = useCallback(
    (e: MouseEvent) => {
      if (!bigCursorRef.current || !smallCursorRef.current) {
        return;
      }

      const initialWidth = cursorWidth || bigCursorRef.current.clientWidth;
      setCursorWidth(initialWidth);

      const mouseInfo = getMouseInfo(e);
      setCursorInfo(mouseInfo);

      // BIG CURSOR
      const width = initialWidth
        * (mouseInfo.isMoving ? MOVE_MULTIPLIER : 1)
        * (mouseInfo.isHovering ? HOVER_MULTIPLIER : 1);

      const height = mouseInfo.isHovering ? width : initialWidth;

      const rotate = Math.atan2(
        mouseInfo.y - cursorInfo.y,
        mouseInfo.x - cursorInfo.x,
      ) * 180 / Math.PI;

      TweenLite.to(bigCursorRef.current, DURATION, {
        force3D: true,
        x: mouseInfo.x,
        y: mouseInfo.y,
        left: -width / 2,
        height,
        width,
      });

      TweenLite.to(bigCursorRef.current, 0, {
        rotate,
      });

      if (timeout.current) { clearTimeout(timeout.current); }
      timeout.current = setTimeout(() => TweenLite.to(bigCursorRef.current, DURATION, {
        left: -width / 2,
        rotate: 0,
        width,
      }), 100);

      // SMALL CURSOR
      TweenLite.to(smallCursorRef.current, 0, {
        ease: Linear.easeNone,
        force3D: true,
        x: mouseInfo.x,
        y: mouseInfo.y,
      });

      TweenLite.to(smallCursorRef.current, DURATION, {
        opacity: mouseInfo.isHovering ? 0 : 1,
      });

      if (mouseInfo.isHovering) {
        addBodyClass(BodyClass.showPointer);
      } else {
        removeBodyClass(BodyClass.showPointer);
      }
    },
    [
      bigCursorRef,
      smallCursorRef,
      cursorWidth,
      getMouseInfo,
      cursorInfo.y,
      cursorInfo.x,
      addBodyClass,
      removeBodyClass,
    ],
  );

  return animateCursor;
};
