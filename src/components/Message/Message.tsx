import React from 'react';

import Avatar from 'components/Avatar';

import { Props } from './types';

const Message = ({ user, text, className }: Props): JSX.Element => (
  <div className={`flex p-4 bg-white shadow-md ${className}`}>
    <Avatar className="mr-7" image={user.avatar} />
    <div>
      <div>{user.name}</div>
      <div className="text-gray-700 text-xs">{text}</div>
    </div>
  </div>
);

export default Message;
