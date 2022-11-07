export interface INote {
  id: number,
  title: string;
  description: string;
  timeStart: number;
  timeEnd: number;
}

export interface IProps {
  src: string;
  notes?: INote[];
}

export interface IVideoPlayer {
  src: string;
  isPlaying: boolean;
  showControls: boolean;
  volume: IVolume;
  progress: number;
  duration: number;
  onProgressUpdate: () => void;
  onPlayPauseClick: () => void;
  onProgressChange: (val: number) => void;
  onVolumeChange: (val: number) => void;
  onMuteClick: (val: boolean) => void;
  onHover: () => void;
  onBlur: () => void;
  notes?: INote[];
}

export interface IPlayer {
  src: string;
  onTimeUpdate: () => void;
}

export interface IVolume {
  muted: boolean;
  val: number;
}

export interface IControls {
  volume: IVolume;
  progress: number;
  duration: number;
  isPlaying: boolean;
  onVolumeChange: (val: number) => void;
  onProgressChange: (val: number) => void;
  onMute: (val: boolean) => void;
  onPlayPause: () => void;
  notes?: INote[];
}