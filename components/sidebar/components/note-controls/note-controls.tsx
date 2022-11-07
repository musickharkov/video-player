import React, {useState} from 'react';
import Input from "~/components/shared/input";
import Button from "~/components/shared/button";
import {INote} from "~/components/video-player/types";

const NoteControls: React.FC<{ onAdd: (data: Omit<INote, 'id'>) => void}> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [timeStart, setTimeStart] = useState<string>('');
  const [timeEnd, setTimeEnd] = useState<string>('');

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setTimeStart('');
    setTimeEnd('');
  }
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({title, description, timeStart: Number(timeStart), timeEnd: timeEnd ? Number(timeEnd) : Number(timeStart) + 10 });
    resetForm();
  }
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-4 border-b py-2'>
      <h3 className='text-xl'>Add note</h3>
      <Input
        label='Title'
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
      />
      <Input
        label='Description'
        value={description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
      />
      <div>
        <Input
          type='number'
          min={0}
          label='Time start'
          value={timeStart}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTimeStart(e.target.value)}
          className='w-1/2'
        />
        <Input
          type='number'
          min={0}
          label='Time end'
          value={timeEnd}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTimeEnd(e.target.value)}
          className='w-1/2'
        />
      </div>
      <div className='self-center'>
        <Button title='Save note' type='submit' />
      </div>
    </form>
  );
};

export default NoteControls;
