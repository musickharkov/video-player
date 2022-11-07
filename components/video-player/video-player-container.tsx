import React, {useEffect, useRef, useState} from 'react';
import {IProps, IVolume} from "~/components/video-player/types";
import VideoPlayer from "~/components/video-player/video-player";

const VideoPlayerContainer: React.FC<IProps> = ({ src, notes }) => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<IVolume>({ muted: false, val: 0.8 });
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);

  useEffect(() => {
    if (playerRef.current) {
      setVolume({
        muted: false,
        val: playerRef.current.volume
      });

      playerRef.current.onloadedmetadata = () => {
        setDuration((playerRef.current as HTMLVideoElement).duration);
      }

    }
  }, [])

  useEffect(() => {
    setShowControls(hovered || !isPlaying)
  }, [hovered, isPlaying])

  const onPlayPauseClick = () => {
    if (playerRef.current && playerRef.current.duration) {
      setIsPlaying(prev => !prev);
      return isPlaying ? playerRef.current.pause() : playerRef.current.play();
    }
  }

  const onMuteClick = (val: boolean) => {
    if (playerRef.current) {
      setVolume(prev => {
        if (prev.muted) {
          return {
            ...prev,
            muted: !val,
          }
        } else {
          return {
            ...prev,
            muted: !val,
          }
        }
      });
      playerRef.current.muted = !val;
    }
  }

  const onVolumeChange = (val: number) => {
    if (playerRef.current) {
      setVolume({muted: !val, val});
      playerRef.current.volume = val;
    }
  }

  const onProgressUpdate = () => {
    if (playerRef.current) {
      setProgress(playerRef.current.currentTime);

      if (playerRef.current.paused) {
        setIsPlaying(false);
      }
    }
  }

  const onProgressChange = (val: number) => {
    if (playerRef.current?.currentTime) {
      setProgress(duration * val);
      playerRef.current.currentTime = duration * val;
    }
  }

  const onHover = () => {
    clearTimeout(hoverTimeout.current);
    setHovered(true);
  }

  const onBlur = () => {
    hoverTimeout.current = setTimeout(() => setHovered(false), 2000);
  }

  return (
    <VideoPlayer
      ref={playerRef}
      src={src}
      isPlaying={isPlaying}
      volume={volume}
      progress={progress}
      duration={duration}
      showControls={showControls}
      notes={notes}
      onProgressUpdate={onProgressUpdate}
      onPlayPauseClick={onPlayPauseClick}
      onProgressChange={onProgressChange}
      onVolumeChange={onVolumeChange}
      onMuteClick={onMuteClick}
      onHover={onHover}
      onBlur={onBlur}
    />
  );
};

export default VideoPlayerContainer;
