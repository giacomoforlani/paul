import Vimeo from '@u-wave/react-vimeo';
import React from 'react';
import { useWindowSize } from 'react-use';

type PlayerProps = PropsWithClass<{
    video: string;
}>

const Player = ({
  className,
  video,
}: PlayerProps) => {
  const { width } = useWindowSize();

  return (
    <Vimeo
      autoplay
      responsive
      video={video}
      width={width * 0.8}
    />
  );
};

export { Player };
