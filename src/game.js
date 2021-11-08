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


Math.floor(Math.random() * (valueArray.length-1))

/*
function shuffle(array) {
   let currentIndex = array.length,  randomIndex;

    //While there remain elements to shuffle...
   while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex--;

     // And swap it with the current element.
     [array[currentIndex], array[randomIndex]] = [
       array[randomIndex], array[currentIndex]];
   }

   return array;
 }

 // Used like so
 var arr = [2, 11, 37, 42];
 shuffle(arr);
 console.log(arr);