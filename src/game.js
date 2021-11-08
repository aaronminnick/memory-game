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
  let valueArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
  for (let i = 0; i < 16; i++) {
    let valueIndex = Math.round(Math.random() * (valueArray.length-1));
    this.addCard(new Card(valueArray[valueIndex]));
    valueArray.splice(valueIndex, 1);
  }
};