import Card from "./card.js";

export default function Game() {
  this.cards = {};
  this.cardIndex = 0;
}

Game.prototype.addCard = function(card) {
  card.index = this.cardIndex;
  this.cards[card.index] = card;
  this.cardIndex++;
};

Game.prototype.generateCards = function() {
  let valueArray = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h'];
  for (let i = 0; i < 16; i++) {
    let valueIndex = Math.floor(Math.random() * (valueArray.length-1));
    this.addCard(new Card(valueArray[valueIndex]));
    valueArray.splice(valueIndex, 1);
  }
}

Game.prototype.generateBoard = function() {
  let htmlString= "";
  // some kind of algorithm to make board

  return htmlString;
};