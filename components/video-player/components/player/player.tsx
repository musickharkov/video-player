import React, {forwardRef} from 'react';
import {IPlayer} from "~/components/video-player/types";

const Player = forwardRef<HTMLVideoElement, IPlayer>(({ src, onTimeUpdate }, ref) => {
  return (
    <video
      ref={ref}
      src={src}
      className='w-full md:max-w-3xl md:h-[34rem] bg-black'
      onTimeUpdate={onTimeUpdate}
    />
  );
});

export default Player;