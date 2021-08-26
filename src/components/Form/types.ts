import { ReactNode, FormEvent } from 'react';

export type Props = {
  children: ReactNode;
  actions: ReactNode[];
  title?: string;
  onSubmit: (e: FormEvent) => void;
  onReset?: () => void;
};
