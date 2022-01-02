import { getRandomArrayItem, getRandomId, getRandomIntegerNumber } from '../utils/common';

const names = ['Wiley Nelson', 'Gage Hall', 'Matias Anderson', 'Rosalie Simmons', 'Tala Jackson', 'Thalia Parker'];

const generateEmail = (name) => `${name.split(' ').join('.').toLowerCase()}@gmail.com`;

const generatePlayer = () => {
  const name = getRandomArrayItem(names);

  return {
    id: getRandomId(),
    avatar: './assets/images/no-avatar.png',
    name,
    email: generateEmail(name),
    score: getRandomIntegerNumber(0, 700),
  };
};

const countPlayers = () => getRandomIntegerNumber(1, 10);

export const generatePlayers = () => new Array(countPlayers()).fill('').map(() => generatePlayer());
