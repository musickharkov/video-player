import React from "react";

export interface IProps {
  type?: 'text' | 'number';
  label: string;
  value: string;
  min?: number;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}
