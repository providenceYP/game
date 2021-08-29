import React from 'react';

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
          <Image className="" src="" />
        </div>
        <div className="">
          {messages.map(({ user, text }: IMessage) => (
            <Message className="my-4" user={user} text={text} />
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
            <svg width="27" height="100%" viewBox="0 0 27 24" fill="white">
              <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5H25V10.5H0V13.5Z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  </Layout>
);

export default Forum;
