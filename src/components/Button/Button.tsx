import React from 'react';

type ButtonType = 'button' | 'submit' | 'reset';

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: ButtonType;
};

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
