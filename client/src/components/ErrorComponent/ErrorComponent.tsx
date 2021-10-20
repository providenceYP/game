import React from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from 'components/icons/CloseIcon';

import { Props } from './types';

export const ErrorComponent: React.FC<Props> = ({
  code = 500,
  text = 'Упс! Что-то пошло не так',
}: Props): JSX.Element => (
  <div className="flex flex-col items-center p-10">
    <div className="p-7 border border-gray-400 rounded-full mb-9">
      <CloseIcon className="fill-current text-blue-700" />
    </div>
    <div className="text-4xl mb-3">{code}</div>
    <div className="text-gray-500 mb-16">{text}</div>
    <Link
      to="/"
      className="uppercase font-medium px-4 py-2 bg-blue-700 text-white rounded"
    >
      На главную
    </Link>
  </div>
);
