import React from 'react';
import {IProps} from "~/components/shared/input/types";

const Input: React.FC<IProps> = ({ type = 'text', label, value, min, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={label}
      value={value}
      onChange={onChange}
      min={min}
      className={`px-2 py-1 border outline-0 ${className}`}
    />
  );
};

export default Input;
