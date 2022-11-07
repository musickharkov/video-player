import React from 'react';
import Button from "~/components/shared/button";
import InputFile from "~/components/shared/input-file";

const ImportNotes: React.FC<{ onImport: (file: File) => void, onExport: () => void}> = ({ onImport, onExport }) => {
  return (
    <div className='w-full py-2 border-b'>
      <h3 className='text-xl mb-2'>Import/Export notes</h3>
      <div className='flex justify-between'>
        <InputFile title='Import JSON' onAdd={onImport} />
        <Button title='Export JSON' onClick={onExport} />
      </div>
    </div>
  );
};

export default ImportNotes;