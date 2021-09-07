import { RequestsType } from './types';

export default {
  login: { method: 'post', url: '/auth/signin' },
  register: { method: 'post', url: '/auth/signup' },
} as RequestsType;
