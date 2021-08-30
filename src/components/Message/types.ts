import { IMessage } from 'typings/message';

export interface Props extends Pick<IMessage, 'user' | 'text'> {
  className?: string;
}
