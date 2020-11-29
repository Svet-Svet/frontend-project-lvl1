/* eslint-disable no-console, no-await-in-loop, import/extensions, no-eval */

import readlineSync from 'readline-sync';
import randomNumber from '../utilits.js';
import numOfRounds from '../index.js';

const startGamesPartSeven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= numOfRounds; i += 1) {
    const isRandomNumber1 = randomNumber();
    const isRandomNumber2 = randomNumber();
    const question = `${isRandomNumber1} ${isRandomNumber2}`;
    console.log('Question:', question);

    const getGcd = (gcdNum1, gcdNum2) => {
      const numberMax = (gcdNum2 > gcdNum1) ? gcdNum2 : gcdNum1;
      const numsForAnalis = [];
      for (let j = 0; j <= numberMax; j += 1) {
        numsForAnalis.push(j);
      }

      let answer = 0;
      for (let k = 1; k < numsForAnalis.length; k += 1) {
        const currentNum = numsForAnalis[k];
        if (gcdNum1 % currentNum === 0 && gcdNum2 % currentNum === 0) {
          if (currentNum >= answer) {
            answer = currentNum;
          }
        }
      }
      return answer;
    };

    const isMethod = () => getGcd(isRandomNumber1, isRandomNumber2);
    const rightAnswer = isMethod();
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${name}!`);
};

export default startGamesPartSeven;
