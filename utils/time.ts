export const secondsToReadableTime = (time: number): string => {
  const minutes: number = Math.floor(time / 60);
  const seconds: number = Math.floor(time) - minutes * 60;
  return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};
