import Vimeo from '@u-wave/react-vimeo';
import React, { useCallback } from 'react';

const NO_CUSTOM_CURSOR_CLASS = 'no-custom-cursor';

type PlayerProps = PropsWithClass<{
  video: string;
}>

const Player = ({
  className,
  video,
}: PlayerProps) => {
  const body = document.querySelector('body');

  const removeCustomCursor = useCallback(() => {
    body?.classList.add(NO_CUSTOM_CURSOR_CLASS);
  }, [body]);

  const restoreCustomCursor = useCallback(() => {
    body?.classList.remove(NO_CUSTOM_CURSOR_CLASS);
  }, [body]);

  return (
    <div
      onMouseEnter={removeCustomCursor}
      onMouseLeave={restoreCustomCursor}
    >
      <Vimeo
        className={className}
        autoplay
        video={video}
        width={window.innerWidth * 0.8}
      />
    </div>
  );
};

export { Player };
