import React, { useEffect, useState } from 'react';

interface IPlayer {
  color: string;
  name: string;
  playerType: string;
  playerHealth: string;
}

export default function PlayerCard(props: IPlayer) {
  const [readyStatus, setReadyStatus] = useState(false);
  useEffect(() => {
    if (props.playerType === "bot") {
      setReadyStatus(true);
    }
  }, [props.playerType]);
  return (
    <>
    {!readyStatus && (
        <div
          className={`relative w-48 h-28 mt-10 ml-10 p-4 rounded-2xl bg-opacity-25 ${props.color} cursor-pointer`}
          onClick={() => setReadyStatus(true)}
        >
          <p className="font-bold">Click to start</p>
        </div>
      )}
      {readyStatus && (
        <div
          className={`relative w-48 h-28 mt-10 ml-10 p-4 rounded-2xl bg-opacity-25 ${props.color}`}
        >
          <p className="font-bold">{props.name}</p>
          <p className="font-extralight">{props.playerType}</p>
          <p className="absolute bottom-0 right-0 pr-4 pb-2">
            {props.playerHealth}
          </p>
        </div>
      )}
    </>
  );
}
