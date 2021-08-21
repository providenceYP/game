import React, { ReactNode, FormEvent } from 'react';

type Props = {
  children: ReactNode;
  actions: ReactNode[];
  title?: string;
  onSubmit: (e: FormEvent) => void;
  onReset?: () => void;
};

export const Form: React.FC<Props> = ({
  children,
  title,
  actions,
  onSubmit,
  onReset,
}: Props) => (
  <form
    onSubmit={onSubmit}
    onReset={onReset}
    className="flex flex-col w-80 bg-blue-600 shadow-md rounded-xl text-left"
  >
    {title && (
      <div className="py-4 text-center">
        <span className="text-xl text-white">{title}</span>
      </div>
    )}
    <div className="flex flex-1 flex-col p-4 bg-white rounded-xl text-left">
      <div className="flex-1">{children}</div>
      <div className="flex flex-col mt-12">{actions}</div>
    </div>
  </form>
);
