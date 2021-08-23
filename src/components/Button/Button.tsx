import React from 'react';
import { NavLink } from 'react-router-dom';
import { Props } from './types';

export const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  type = 'button',
  link = false,
  to = '',
}: Props) =>
  link ? (
    <NavLink className={className} type={type} to={to}>
      {children}
    </NavLink>
  ) : (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
