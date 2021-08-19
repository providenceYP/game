import React, {SyntheticEvent} from 'react';

type Props = {
  children: JSX.Element,
  actions: JSX.Element[],
  onSubmit: (e: SyntheticEvent) => void,
};

export const Form: React.FC<Props> = ({ children , actions }) => (
  <form className="flex flex-col h-1/2 w-80 bg-blue-600 shadow-md rounded-xl text-left">
    <div className="py-6 text-center">
      <span className="text-xl text-white">Вход</span>
    </div>
    <div className="flex flex-1 flex-col p-4 bg-white rounded-xl text-left">
      <div className="flex-1">{children}</div>
      <div className="flex flex-col">{actions}</div>
    </div>
  </form>
);
