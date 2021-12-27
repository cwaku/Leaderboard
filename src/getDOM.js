import { getScores } from './fetch.js';

const scoreBoard = document.querySelector('.score-container');

const render = async () => {
  scoreBoard.innerHTML = '';
  const data = await getScores();
  const list = data.map((item) => {
    const listItem = `<li class="list-item hvr-shutter-in-horizontal"><p>${item.user}:</p> <p>${item.score}</p></li>`;
    return listItem;
  });
  scoreBoard.innerHTML = list.join('');
};

export default render;