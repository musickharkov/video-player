import React, {forwardRef} from 'react';
import Player from "~/components/video-player/components/player";
import IconButton from "~/components/shared/icon-button";
import Controls from "~/components/video-player/components/controls";
import {IVideoPlayer} from "~/components/video-player/types";
import Notes from "~/components/video-player/components/notes";

const VideoPlayer = forwardRef<HTMLVideoElement, IVideoPlayer>(
  ({
   src,
   isPlaying,
   showControls,
   volume,
   progress,
   duration,
   notes,
   onProgressUpdate,
   onPlayPauseClick,
   onProgressChange,
   onVolumeChange,
   onMuteClick,
   onHover,
   onBlur
  },
  ref) => {
    return (
      <div className='flex gap-4 flex-col xl:flex-row w-full'>
        <div className='relative h-fit' onMouseEnter={onHover} onMouseLeave={onBlur}>
          <div className='relative w-full bg-black flex items-center justify-center'>
            <Player src={src} onTimeUpdate={onProgressUpdate} ref={ref} />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              {showControls && (
                <IconButton
                  src={isPlaying ? '/icons/pause.svg' : '/icons/play.svg'}
                  title={isPlaying ? 'pause' : 'play'}
                  size='large'
                  color='white'
                  onClick={onPlayPauseClick}
                />
              )}
            </div>
          </div>
          {showControls && (
            <Controls
              volume={volume}
              progress={progress}
              duration={duration}
              isPlaying={isPlaying}
              onVolumeChange={onVolumeChange}
              onProgressChange={onProgressChange}
              onPlayPause={onPlayPauseClick}
              onMute={onMuteClick}
              notes={notes}
            />
          )}
        </div>
        {notes && (
          <div className='flex-grow border p-4'>
            <Notes data={notes} time={progress} />
          </div>
        )}
      </div>
    );
});

export default VideoPlayer;