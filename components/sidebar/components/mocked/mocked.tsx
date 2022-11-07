import React from 'react';
import Button from "~/components/shared/button";

const Mocked: React.FC<{onApply: () => void}> = ({ onApply }) => {
  return (
    <div className='w-full border-b py-2'>
      <h3 className='text-xl mb-2'>MOCKED DATA</h3>
      <Button title='Apply mocked data' onClick={onApply}/>
    </div>
  );
};

export default Mocked;