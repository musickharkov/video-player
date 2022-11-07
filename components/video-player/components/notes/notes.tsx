import React from 'react';
import {IProps} from "./types";
import {INote} from "~/components/video-player/types";

const Notes: React.FC<IProps> = ({data, time}) => {
  const activeNotes = data.filter((item: INote) => time >= item.timeStart && time <= item.timeEnd)
  return (
    <div className='flex flex-col h-full flex items-center'>
      <h2 className='text-gray-500 text-3xl'>Notes</h2>
      <ul className='w-full h-full'>
        {activeNotes.length > 0 ? (
          activeNotes?.map(item => (
            <li key={item.id} className='flex flex-col'>
              <span className='text-gray-700 uppercase text-xs font-semibold -mb-1'>{item.title}</span>
              <span className='text-md w-full border-b py-1'>
                {item.description}
              </span>
            </li>
          ))
        ) : (
          <div className='h-full flex justify-center items-center'>
            <h3 className='text-4xl text-gray-400'>Empty List</h3>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Notes;