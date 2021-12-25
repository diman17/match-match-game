const getRandomIntegerNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length - 1);
  return array[randomIndex];
};

const getRandomId = () => `${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`;

const names = ['Wiley Nelson', 'Gage Hall', 'Matias Anderson', 'Rosalie Simmons', 'Tala Jackson', 'Thalia Parker'];

const generateEmail = (name) => `${name.split(' ').join('.').toLowerCase()}@gmail.com`;

const generatePlayer = () => {
  const name = getRandomArrayItem(names);

  return {
    id: getRandomId(),
    image: './assets/images/no-avatar.png',
    name,
    email: generateEmail(name),
    score: getRandomIntegerNumber(0, 700),
  };
};

const countPlayers = () => getRandomIntegerNumber(1, 10);

export const generatePlayers = () => new Array(countPlayers()).fill('').map(() => generatePlayer());
