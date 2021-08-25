import React from 'react';
import { Props } from './types';

export const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  type = 'button',
}: Props) => (
  <button className={className} type={type} onClick={onClick}>
    {children}
  </button>
);
