import React from 'react';

import './BaseInput.css';

type Props = {
  onChange: () => {} | null;
  children: React.ReactNode;
};

export const BaseInput: React.FC<Props> = ({ children, onChange }: Props) => (
  <input className="base-input" onChange={onChange}>{children}</input>
);

