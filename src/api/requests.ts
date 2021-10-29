import { RequestsType } from './types';

export default {
  login: { method: 'post', url: '/auth/signin' },
  logout: { method: 'post', url: '/auth/logout' },
  user: { method: 'get', url: '/auth/user' },
  register: { method: 'post', url: '/auth/signup' },
  addToLeaderboard: { method: 'post', url: '/leaderboard' },
  leaderboard: { method: 'post', url: `/leaderboard/${process.env.TEAM_NAME}` },
} as RequestsType;
