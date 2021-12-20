import fetch from './fetch.js';

const scoreBoard = document.querySelector('.score-container');

const render = () => {
  const data = fetch();
  const list = data.map((item) => {
    const listItem = `<li class="list-item"><p>${item.name}:</p> <p>${item.score}</p></li>`;
    return listItem;
  });
  scoreBoard.innerHTML = list.join('');
};

export default render;