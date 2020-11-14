import promptly from 'promptly';

export default async () => {
  const whatIsYourName = await promptly.prompt('May I have your name? ');
  console.log('Hello,' + whatIsYourName + '!');
};