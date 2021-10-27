import monster1Image from 'static/images/monster1.png';
import monster2Image from 'static/images/monster2.png';
import monster3Image from 'static/images/monster3.png';
import monster4Image from 'static/images/monster4.png';

export type MonsterData = {
  name: string;
  health: number;
  attack: number;
  image: string;
};

export const monsterCollection = [
  {
    name: 'monster1',
    health: 9,
    attack: 3,
    image: monster1Image,
  },
  {
    name: 'monster2',
    health: 4,
    attack: 6,
    image: monster2Image,
  },
  {
    name: 'monster3',
    health: 5,
    attack: 4,
    image: monster3Image,
  },
  { name: 'monster4', health: 6, attack: 6, image: monster4Image },
] as MonsterData[];
