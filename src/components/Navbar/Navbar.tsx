import React, { useState } from 'react';
import Button from 'components/Button';
import Logo from 'components/Logo';

export const Navbar: React.FC = () => {
  const [isVisible, setNavbar] = useState(true);
  const toggle = () => {
    setNavbar(!isVisible);
  };

  return (
    <nav className="shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
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
          <div className="items-center md:flex">
            <div className="flex flex-col md:flex-row md:mx-6">
              <Button
                className="
                text-blue-600
                background-transparent
                font-bold uppercase
                px-3
                py-1
                text-xs
                outline-none
                mr-1
            "
              >
                Вход
              </Button>
              <Button
                className="
                  bg-blue-600
                  text-white
                  active:bg-purple-600
                  font-bold
                  uppercase
                  text-xs
                  px-4
                  py-2
                  rounded
                  shadow
                  hover:shadow-md
                  outline-none
                  focus:outline-none
                  ease-linear
                  transition-all
                  duration-150
              "
              >
                Регистрация
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
