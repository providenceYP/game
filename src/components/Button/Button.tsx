import React from 'react';

type Props = {
  onClick?: () => void | null;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export const Button: React.FC<Props> = ({ children, onClick = null, className, type = 'button'}: Props) => (
  <button className={className} type={type} onClick={onClick}>{children}</button>
);
