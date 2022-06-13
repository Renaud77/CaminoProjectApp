import createCard from "./js/createCard.js";
import config from "./js/config.js";

function displayCard() {
  for (let i = 1; i <= config.numberOfCard; i++) {
    const card = createCard(i, 't' + i);
    document.querySelector(".main-container").appendChild(card);
  }
}



displayCard();
