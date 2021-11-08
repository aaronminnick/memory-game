import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {generateBoard} from './ui.js';

import Card from './card.js';
import Game from './game.js';


const game = new Game();
game.generateCards();

$("#game-board").html(generateBoard(game));