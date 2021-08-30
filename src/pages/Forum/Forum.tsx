import React from 'react';

import ArrowIcon from 'components/icons/ArrowIcon';
import BaseInput from 'components/BaseInput';
import Button from 'components/Button';
import Image from 'components/Image';
import Layout from 'components/Layout';
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
  <Layout className="bg-gray-50">
    <div className="container m-auto max-w-6xl p-8">
      <h1 className="text-gray-800 text-3xl px-16 mb-4">{match.params.name}</h1>
      <div className="bg-white rounded-2xl px-16 py-5 min-w-full">
        <div className="w-5/12 p-4 shadow-xl">
          <Image />
        </div>
        <div>
          {messages.map(({ user, text }: IMessage, index) => (
            // TODO: replace with id when adding real data
            // eslint-disable-next-line react/no-array-index-key
            <Message className="my-4" user={user} text={text} key={index} />
          ))}
        </div>
        <div className="relative">
          <BaseInput
            className="pr-12 bg-gray-100 border-none"
            inputClassName="bg-gray-100"
            value=""
          />
          <Button
            type="submit"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 rounded-full py-2.5 px-1 h-4/6 hover:bg-gray-500"
          >
            <ArrowIcon />
          </Button>
        </div>
      </div>
    </div>
  </Layout>
);

export default Forum;
