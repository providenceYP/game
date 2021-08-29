import React from 'react';
import cn from 'classnames';

import UserIcon from 'components/icons/UserIcon';

import { Props } from './types';

const Avatar = ({
  imageSrc,
  className,
  placeholderClassName,
}: Props): JSX.Element => (
  <div
    className={`bg-gray-100 h-9 w-9 rounded-full flex justify-center items-center overflow-hidden ${className}`}
  >
    {imageSrc ? (
      <div
        style={{ backgroundImage: `url(${imageSrc})` }}
        className={cn(
          'bg-center bg-no-repeat bg-cover w-full h-full',
          className,
        )}
      />
    ) : (
      <UserIcon className={placeholderClassName} />
    )}
  </div>
);

export default Avatar;
