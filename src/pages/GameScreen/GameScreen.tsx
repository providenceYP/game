import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';
import PlayerCard from 'components/PlayerCard';
import GameComponent from 'components/Game';

import { Person } from 'logic/Person/Person';
import { Bot } from 'logic/Bot/Bot';
import { useSelector } from 'react-redux';

import { State } from 'store';
import { User } from 'src/store/types';

export default function GameScreen() {
  const [players, setPlayers] = useState([]);
  const user = useSelector<State>((state) => state.auth.user) as User;

  const handleChangeHealth = () => {
    setPlayers((state) => [...state]);
  };

  useEffect(() => {
    if (user?.first_name) {
      setPlayers([
        new Person(user.first_name, handleChangeHealth),
        new Bot('Simon', handleChangeHealth),
      ]);
    }
  }, [user?.first_name]);

  const makeHandleChangeStatus = (index: number) => () => {
    setPlayers((state) => {
      const newPlayers = [...state];
      newPlayers[index].isReady = true;

      return newPlayers;
    });
  };

  useEffect(() => {
    const [activatedPlayers, sleepingPlayers] = players.reduce(
      (memo, { isReady, name }) => {
        if (isReady) {
          memo[0].push(name);
        } else {
          memo[1].push(name);
        }

        return memo;
      },
      [[], []] as string[][],
    );

    if (sleepingPlayers.length) {
      if ('Notification' in window) {
        const createNotification = () => {
          const playerNames = activatedPlayers.join(', ');
          const verb = activatedPlayers.length === 1 ? 'has' : 'have';
          const text = `${playerNames} ${verb} already joined the game. Come on with us!`;

          return new Notification(text);
        };

        if (Notification.permission === 'granted') {
          createNotification();
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission((permission) => {
            if (permission === 'granted') {
              createNotification();
            }
          });
        }
      }
    }
  }, [players]);

  return (
    <Layout className="p-10 overflow-x-auto flex-wrap xl:flex-nowrap">
      <div className="flex flex-row self-start flex-wrap xl:mr-12 xl:flex-col xl:flex-nowrap">
        {players.map(({ color, name, type, health, isReady }, index) => (
          <PlayerCard
            key={name}
            color={color}
            name={name}
            playerType={type}
            playerHealth={health}
            isReady={isReady}
            changeStatus={makeHandleChangeStatus(index)}
            className={
              index === players.length - 1 ? 'mb-10' : 'mr-10 mb-10 xl:mr-0'
            }
          />
        ))}
      </div>
      {!!players.length && (
        <div className="self-start max-w-full xl:max-w-screen-lg">
          <GameComponent
            players={players}
            onChangeHealth={handleChangeHealth}
            user={user}
          />
        </div>
      )}
    </Layout>
  );
}
