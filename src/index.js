import "./style.css";
import "./animation.css";

import { sendNewScore } from "./fetch.js";
import render from "./getDOM.js";

const refreshButton = document.querySelector(".refresh-button");
const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", () => {
  refreshButton.addEventListener("click", async () => {
    render();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.querySelector(".name-input");
    const score = document.querySelector(".score-input");
    sendNewScore();
    name.value = "";
    score.value = "";
  });

  render();
});
