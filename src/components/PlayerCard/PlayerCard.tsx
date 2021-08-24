import React, { useEffect, useState } from 'react';
import { Props } from './types';

export default function PlayerCard(props: Props) {
  const [readyStatus, setReadyStatus] = useState(false);

  useEffect(() => {
    if (props.playerType === 'bot') {
      setReadyStatus(true);
    }
  }, [props.playerType]);

  return !readyStatus ? (
    <button
      type="button"
      className={`relative w-48 h-28 mt-10 ml-10 p-4 rounded-2xl bg-opacity-25 ${props.color} cursor-pointer`}
      onClick={() => setReadyStatus(true)}
      onKeyDown={() => setReadyStatus(true)}
    >
      <p className="font-bold">Click to start</p>
    </button>
  ) : (
    <div
      className={`relative w-48 h-28 mt-10 ml-10 p-4 rounded-2xl bg-opacity-25 ${props.color}`}
    >
      <p className="font-bold">{props.name}</p>
      <p className="font-extralight">{props.playerType}</p>
      <p className="absolute bottom-0 right-0 pr-4 pb-2">
        {props.playerHealth}
      </p>
    </div>
  );
}
