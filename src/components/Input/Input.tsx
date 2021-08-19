import React from 'react';

import { Props } from './types';

const Input = ({ onSubmit }: Props): JSX.Element => (
  <form onSubmit={onSubmit}>
    <input />
    <button type="submit">
      <svg width="27" height="24" viewBox="0 0 27 24">
        <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5H25V10.5H0V13.5Z" />
      </svg>
    </button>
  </form>
);

export default Input;
