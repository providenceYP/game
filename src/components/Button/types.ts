import { ButtonHTMLAttributes } from 'react';

type ButtonType = 'button' | 'submit' | 'reset';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: ButtonType;
  link?: boolean;
  to?: string;
}
