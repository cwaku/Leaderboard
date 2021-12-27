import './style.css';
import './animation.css';

import { sendNewScore } from './fetch.js';
import render from './getDOM.js';

document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners to the buttons
  document.querySelector('.refresh-button').addEventListener('click', async () => { render(); });

  document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    sendNewScore();
    document.querySelector('.name-input').value = '';
    document.querySelector('.score-input').value = '';
  });

  render();
});