import React from 'react';
import { IProps } from './types';

const Button: React.FC<IProps> = ({ title, type = 'button', disabled, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-2 py-1 ${disabled ? 'cursor-not-allowed bg-gray-50' : 'bg-gray-200 hover:bg-gray-100'}`}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;