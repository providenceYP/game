import React from 'react';
import { Link } from 'react-router-dom';

import Image from 'components/Image';

const topics = new Array(10).fill({
  name: 'topic',
  title: 'Name',
});

const ForumList = (): JSX.Element => (
  <div className="min-h-screen flex bg-gray-50">
    <div className="container m-auto max-w-5xl p-8 font-mono flex">
      <div className="flex-initial w-5/12 h-full mr-16">
        <Image className="w-full" src="" />
      </div>
      <div className="flex-auto">
        <h1 className="text-gray-600 text-3xl mb-14">Тематики</h1>
        <div className="grid grid-cols-2">
          {topics.map(({ title, name }) => (
            <Link to={`/forum/${name}`} className="mb-6">
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ForumList;
