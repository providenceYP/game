import { ChangeEvent, InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  value: string;
  className?: string;
  placeholder: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
