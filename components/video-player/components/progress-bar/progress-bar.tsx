import React, {useEffect, useRef, useState} from 'react';
import {INote} from "~/components/video-player/types";
import {deepClone} from "~/utils/format";

export interface IProgressBar {
  value: number;
  maxValue?: number;
  onChange: (val: number) => void;
  notes?: INote[];
}

const ProgressBar: React.FC<IProgressBar> = ({ value, maxValue, onChange, notes }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (progressRef.current) {
      setWidth(progressRef.current?.offsetWidth)
    }
  }, [maxValue]);

  const getPosition = (e: React.MouseEvent<HTMLElement>) => {
    if (progressRef.current) {
      const pos = e.pageX - progressRef.current.getBoundingClientRect().left;
      const percentage = pos / width;

      if (percentage >= 1) {
        return 1;
      }
      else if (percentage <= 0) {
        return 0;
      }

      return percentage;

    }
    return 0;
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    onChange(getPosition(e))
  };

  const onMouseDown = () => {
    document.addEventListener('mousemove', onClick as any);
    document.addEventListener('mouseup', onMouseUp);

  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onClick as any);
  };

  const getPositionX = (val: number) => {
    if (maxValue) {
      return val / maxValue * 100;
    }
  }

  const getWidth = (start: number, end: number) => {
    return (end - start) / (maxValue as number) * 100;
  }

  const combineOverlapped = (arr: INote[]) => {
    return arr
      .reduce((acc: INote[], curr) => {
        const last = acc[acc.length - 1] || [];
        if (last.timeStart <= curr.timeStart && curr.timeStart <= last.timeEnd) {
          if (last.timeEnd < curr.timeEnd) {
            last.timeEnd = curr.timeEnd;
          }
          return acc;
        }
        return acc.concat(curr);
      }, []);
  }

  return (
    <div
      ref={progressRef}
      className='relative w-full h-2 bg-gray-500 cursor-pointer'
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <div
        className='absolute top-0 left-0 bg-green-500 h-full'
        style={{width: `${value * 100}%`}}
      />
      {notes && combineOverlapped(deepClone(notes)).map((item: INote) => (
        <div
          key={item.id}
          className={`absolute top-1/2 -translate-y-1/2 h-2 bg-black hover:scale-y-150 cursor-pointer opacity-20 hover:bg-[rgba(0,0,0,0.45)] border-x border-x-white`}
          style={{left: `${getPositionX(item.timeStart)}%`, width: `${getWidth(item.timeStart, item.timeEnd)}%`}}
        />
      ))}

    </div>
  );
};

export default ProgressBar;