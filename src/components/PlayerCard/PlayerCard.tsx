import React from 'react';
import cn from 'classnames';

import Avatar from 'components/Avatar';

import { Props } from './types';

export default function PlayerCard(props: Props) {
  const className = 'relative w-48 h-28 p-4 rounded-2xl bg-opacity-25';

  return !props.isReady ? (
    <button
      type="button"
      className={cn(className, 'cursor-pointer')}
      onClick={props.changeStatus}
      onKeyDown={props.changeStatus}
      style={{ background: props.color }}
    >
      <p className="font-bold">Click to start</p>
    </button>
  ) : (
    <div className={className} style={{ background: props.color }}>
      <div className="flex items-center">
        <Avatar />
        <div className="flex flex-col ml-3">
          <p className="font-bold">{props.name}</p>
          <p className="font-extralight">{props.playerType}</p>
        </div>
      </div>
      <p className="absolute bottom-0 right-0 pr-4 pb-2">
        {`❤️ ${props.playerHealth}`}
      </p>
    </div>
  );
}
