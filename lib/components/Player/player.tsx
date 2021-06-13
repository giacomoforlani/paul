import Vimeo from '@u-wave/react-vimeo';
import React from 'react';

type PlayerProps = PropsWithClass<{
  video: string;
}>

const Player = ({
  className,
  video,
}: PlayerProps) => (
  <Vimeo
    className={className}
    autoplay
    video={video}
    width={window.innerWidth * 0.8}
  />
);

export { Player };
