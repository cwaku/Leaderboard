const userInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');

const sendNewItem = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Avalanche Pipes' }),
  });
};

const sendNewScore = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nONLcYfe5VIS7yt3lQIO/scores/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: userInput.value, score: scoreInput.value }),
  });
};

const getScores = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nONLcYfe5VIS7yt3lQIO/scores/';
  const data = await fetch(url);
  const content = await data.json();
  return content.result;
};

export { sendNewItem, sendNewScore, getScores };
