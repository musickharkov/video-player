import React from 'react';
import ProgressBar from "~/components/video-player/components/progress-bar";
import IconButton from "~/components/shared/icon-button";
import {secondsToReadableTime} from "~/utils/time";
import {IControls} from "~/components/video-player/types";

const Controls: React.FC<IControls> = ({ isPlaying, volume, progress, duration, notes, onPlayPause, onVolumeChange, onProgressChange, onMute }) => {
  return (
    <div className='overflow-hidden absolute flex gap-2 pb-2 flex flex-wrap top-full -translate-y-full left-0 w-full bg-black text-white select-none'>
      <ProgressBar value={progress / duration} onChange={onProgressChange} notes={notes} maxValue={duration} />
      <div className='w-full flex justify-between gap-2 px-4'>
        <div className='flex w-fit items-center gap-4'>
          <IconButton
            src={isPlaying ? '/icons/pause.svg' : '/icons/play.svg'}
            title={isPlaying ? 'pause' : 'play'}
            size='small'
            color='white'
            onClick={onPlayPause}
          />
          <div className='flex gap-2 w-32 items-center'>
            <IconButton
              src={volume.muted ? '/icons/mute.svg' : '/icons/volume.svg'}
              title={volume.muted? 'unmute' : 'mute'}
              size='small'
              color='white'
              onClick={() => onMute(volume.muted)}
            />
            <ProgressBar value={volume.muted ? 0 : volume.val} onChange={onVolumeChange} />
          </div>
        </div>
        <div>
          {secondsToReadableTime(progress)} / {secondsToReadableTime(duration)}
        </div>
      </div>
    </div>
  );
};

export default Controls;