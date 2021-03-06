import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getUser } from 'store/slices/auth';

import Layout from 'components/Layout';
import Image from 'components/Image';

import mainImage from 'static/images/main.jpeg';

import getTokenInfo from 'utils/getTokenInfo';

export default function Main() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    async function processOAuth() {
      const res = await getTokenInfo(history);

      if (res) {
        dispatch(getUser());
      }
    }

    processOAuth();
  }, []);

  return (
    <Layout className="container mx-auto p-10">
      <div className="mr-20 w-7/12 rounded overflow-hidden">
        <Image className="min-w-full" src={mainImage} />
      </div>
      <div>
        <div className="text-5xl mb-6">Играйте в Battle Dice</div>
        <div className="max-w-lg text-gray-500 mb-14">
          Лучшее место для игры с друзьями или случайными людьми. Чтобы начать
          игру вам нужно просто зарегистрироваться. Никаких платежей и подписок
          - сразу можете начать игру!
        </div>
        <Link
          to="/game"
          className="uppercase font-medium py-2 px-4 bg-blue-700 text-white rounded my-1 md:mr-5 md:my-0 hover:bg-blue-800 min-w-full block text-center"
        >
          Играть
        </Link>
      </div>
    </Layout>
  );
}
