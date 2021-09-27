import { ReactNode, ReactNodeArray } from 'react';

export type Props = {
  children: ReactNode | ReactNodeArray;
};

export type State = {
  error?: Error;
};
