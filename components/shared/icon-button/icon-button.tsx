import React from 'react';
import Image from 'next/image';
import {IIconButton} from "~/components/shared/icon-button/types";

const IconButton: React.FC<IIconButton> = ({ src, title, size, color, onClick }) => {
  const getSize = () => {
    switch(size) {
      case 'small':
        return 'w-6 h-6'
      case 'large':
      default:
        return 'w-20 h-20'
    }
  };

  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer shrink-0 ${getSize()} ${color === 'white' ? 'invert' : ''}`}
    >
      <Image
        src={src}
        alt={title}
        sizes='6rem'
        fill
      />
    </div>
  );
};

export default IconButton;