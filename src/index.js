import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {generateBoard, reHideCard} from './ui.js';

import Game from './game.js';


const game = new Game();
game.generateCards();

$("#game-board").html(generateBoard(game));

$(".card").on("click", function() {
  let card = $(this.firstChild);
  if(!game.cards[card.attr("id")].displayed) {
    card.show();
    game.addCurrentCard(card.attr("id"));
    game.cards[card.attr("id")].displayed = true;
    if (game.incrementCounter() === 2) {
      game.compareCards();
      reHideCard(game);
    }
  }
});