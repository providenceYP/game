import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  className?: string;
  inputClassName?: string;
}
