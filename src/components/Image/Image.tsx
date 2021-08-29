import React from 'react';

import { Props } from './types';

const Image = ({ src, className, alt = '' }: Props): JSX.Element =>
  src ? (
    <img className={className} src={src} alt={alt} />
  ) : (
    <div
      className={`bg-gray-200 flex justify-center items-center relative h-0  ${className}`}
      style={{ paddingBottom: '75%', minWidth: '100px' }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="stroke-current stroke-2 text-gray-500 absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2"
      >
        <g opacity="0.5">
          <path
            d="M31.6667 5H8.33333C6.49238 5 5 6.49238 5 8.33333V31.6667C5 33.5076 6.49238 35 8.33333 35H31.6667C33.5076 35 35 33.5076 35 31.6667V8.33333C35 6.49238 33.5076 5 31.6667 5Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1666 16.6666C15.5473 16.6666 16.6666 15.5473 16.6666 14.1666C16.6666 12.7859 15.5473 11.6666 14.1666 11.6666C12.7859 11.6666 11.6666 12.7859 11.6666 14.1666C11.6666 15.5473 12.7859 16.6666 14.1666 16.6666Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 25L26.6667 16.6666L8.33337 35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );

export default Image;
