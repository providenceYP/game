import React from 'react';
import { Props } from './types';

export const BaseInput: React.FC<Props> = ({
  onChange,
  placeholder,
  required = false,
  value,
  type = 'text',
  className = '',
}: Props) => (
  <div className={className}>
    <input
      className="
        px-3
        py-3
        placeholder-gray-400
        text-gray-600
        relative
        bg-white
        rounded
        text-sm
        border
        border-gray-400
        outline-none
        focus:outline-none
        focus:ring
        w-full
      "
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      value={value}
      type={type}
    />
  </div>
);
