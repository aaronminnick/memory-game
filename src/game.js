export default function Game() {
  this.cards = {};
  this.cardIndex = 0;
  this.currentCards = [];
  this.counter = 0;
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

Game.prototype.addCurrentCard = function(key){
  this.currentCards.push(key);
};

Game.prototype.incrementCounter = function () {
  this.counter += 1;
  return this.counter;
}

Game.prototype.compareCards = function () {
  let card1 = this.cards[this.currentCards[0]];
  let card2 = this.cards[this.currentCards[1]];
  if (card1.value === card2.value){
    card1.value = true;
    card2.value = true;
  }
  this.counter = 0;
  this.currentCards = [];
};

function Card(value) {
  this.value = value;
  this.matched = false;
}