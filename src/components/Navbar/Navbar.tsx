import React, { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import Button from 'components/Button';
import Logo from 'components/Logo';

const links = [
  {
    url: '/',
    exact: true,
    title: 'Главная',
  },
  {
    url: '/leaderboard',
    title: 'Таблица лидеров',
  },
  {
    url: '/forum',
    title: 'Форум',
  },
];

export const Navbar: React.FC = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggle = useCallback(() => {
    setIsVisible((state: boolean) => !state);
  }, [setIsVisible]);

  return (
    <nav className="shadow dark:bg-gray-800 bg-blue-50">
      <div className="container px-6 py-3 mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="flex md:hidden">
            <Button
              onClick={toggle}
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </Button>
          </div>
        </div>

        {isVisible && (
          <>
            <div className="flex flex-col md:flex-row order-last md:order-none">
              {links.map(({ url, title, exact }) => (
                <NavLink
                  key={url}
                  to={url}
                  exact={exact ?? false}
                  className="uppercase text-xs font-medium py-2 px-4 bg-white rounded my-1 md:mr-5 md:my-0 hover:bg-blue-700 hover:text-white"
                  activeClassName="text-blue-700"
                >
                  {title}
                </NavLink>
              ))}
            </div>
            <div className="items-center md:flex">
              <div className="flex flex-col md:flex-row md:mx-6">
                <NavLink
                  to="/login"
                  className="bg-transparent font-medium uppercase px-4 py-2 rounded text-xs my-1 md:mr-1 md:my-0 hover:bg-blue-700 hover:text-white"
                  activeClassName="text-blue-700"
                >
                  Вход
                </NavLink>
                <NavLink
                  to="/register"
                  className="bg-white font-medium uppercase px-4 py-2 rounded text-xs my-1 md:mr-1 md:my-0 hover:bg-blue-700 hover:text-white"
                  activeClassName="text-blue-700"
                >
                  Регистрация
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
