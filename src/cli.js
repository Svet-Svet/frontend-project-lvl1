/* eslint-disable no-console, no-await-in-loop, import/extensions */

import readlineSync from 'readline-sync';

const getGame = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default getGame;
