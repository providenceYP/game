import React from 'react';

import Input from 'components/Input';
import Image from 'components/Image';
import Message from 'components/Message';
import { IMessage } from 'typings/message';

import { ForumProps } from './types';

const messages = new Array(10).fill({
  user: {
    name: 'Oleg',
    health: 0,
  },
  text: 'text',
  date: new Date(),
} as IMessage);

const Forum = ({ match }: ForumProps): JSX.Element => (
  <div className="min-h-screen flex bg-gray-50">
    <div className="container m-auto max-w-6xl p-8 font-mono">
      <h1 className="text-gray-800 text-3xl px-16 mb-4">{match.params.name}</h1>
      <div className="bg-white rounded-2xl px-16 py-5 min-w-full">
        <div className="w-5/12 p-4 shadow-xl">
          <Image className="" src="" />
        </div>
        <div className="">
          {messages.map(({ user, text }: IMessage) => (
            <Message className="my-4" user={user} text={text} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  </div>
);

export default Forum;
