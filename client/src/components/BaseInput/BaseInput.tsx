import React from 'react';
import cn from 'classnames';

import { Props } from './types';

export const BaseInput: React.FC<Props> = ({
  onChange,
  placeholder,
  required = false,
  value,
  type = 'text',
  className = '',
  inputClassName = '',
}: Props): JSX.Element => (
  <div
    className={cn('rounded overflow-hidden border border-gray-400', className)}
  >
    <input
      className={cn(
        'px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white text-sm outline-none focus:outline-none focus:ring w-full',
        inputClassName,
      )}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      value={value}
      type={type}
    />
  </div>
);
