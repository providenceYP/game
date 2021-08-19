import { User } from 'typings/user';

export interface IMessage {
  user: User;
  text: string;
  date: Date;
}
