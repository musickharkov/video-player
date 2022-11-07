import React from 'react';
import Button from "~/components/shared/button";

const Mocked: React.FC<{onApply: () => void, onReset: () => void}> = ({ onApply, onReset}) => {
  return (
    <div className='w-full border-b py-2'>
      <h3 className='text-xl mb-2'>MOCKED DATA</h3>
      <div className='flex flex-col gap-2'>
        <Button title='Apply mocked data' onClick={onApply}/>
        <Button title='Reset data' onClick={onReset}/>
      </div>
    </div>
  );
};

export default Mocked;