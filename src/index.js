import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {generateBoard} from './ui.js';

import Game from './game.js';


const game = new Game();
game.generateCards();

$("#game-board").html(generateBoard(game));

let counter = 0;
$(".card").on("click", function(){
  let card = $(this.firstChild);
  card.show();
  game.addCurrentCard(card.id);
  
  if (game.incrementCounter() === 2) {
    game.compareCards();
    // checkformatched(game);
  }
})