import React, {useState} from 'react';
import InputFile from "~/components/shared/input-file";
import Input from "~/components/shared/input";
import Button from "~/components/shared/button";

const ImportVideo: React.FC<{ onUpload: (val: File | string) => void}> = ({onUpload}) => {
  const [src, setSrc] = useState<string>('');

  const onSubmit = () => {
    onUpload(src);
    setSrc('');
  }

  const isUrl = (val: string) => {
    try {
      return Boolean(new URL(val));
    } catch (e) {
      return false;
    }
  }

  return (
    <div className='w-full border-b py-2'>
      <h2 className='text-xl'>Upload video</h2>
      <div className='flex flex-col gap-4'>
        <div className='flex'>
          <Input
            label='Video url'
            value={src}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSrc(e.target.value)}
          />
          <Button
            title='Fetch'
            onClick={onSubmit}
            disabled={!isUrl(src)}
          />
        </div>
        <InputFile title='Upload local file' onAdd={onUpload}/>
      </div>

    </div>
  );
};

export default ImportVideo;