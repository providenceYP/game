import React from 'react';

import './Button.css';

type Props = {
  onPress?: () => {} | null;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children, onPress = null }: Props) => (
  <button className="button" onClick={onPress}>{children}</button>
);
