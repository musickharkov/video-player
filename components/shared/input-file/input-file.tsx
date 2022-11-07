import React, {useRef} from 'react';
import Button from "~/components/shared/button";

const InputFile: React.FC<{ title: string, onAdd: (val: File) => void}> = ({title, onAdd}) => {
  const ref = useRef<HTMLInputElement>(null)

  const onClick = () => {
    ref.current?.click();
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = (event.target.files as FileList)[0];
    onAdd(file);
  }

  return (
    <div>
      <Button title={title} onClick={onClick}/>
      <input ref={ref} type='file' className='hidden' onChange={onChange} />
    </div>
  );
};

export default InputFile;