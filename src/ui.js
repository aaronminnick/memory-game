import $ from 'jquery';

export function generateBoard(game){
  let htmlForGameBoard = "";  
  for (let i = 0; i < 16; i++){
    if(i === 0){
      htmlForGameBoard += "<div class='row'><div class='col-md-3'><div class='card'><h1 id='" + i +"'>" + game.cards[i].value + "</div></div>";
    } else if (i === 4 || i === 8 || i === 12){
      htmlForGameBoard += "</div><div class='row'><div class='col-md-3'><div class='card'><h1 id='" + i +"'>" + game.cards[i].value + "</div></div>";
    } else if(i === 15){
      htmlForGameBoard += "<div class='col-md-3'><div class='card'><h1 id='" + i +"'>" + game.cards[i].value + "</div></div></div>";
    } else{
      htmlForGameBoard += "<div class='col-md-3'><div class='card'><h1 id='" + i +"'>" + game.cards[i].value + "</div></div>";
    }
  }
  return htmlForGameBoard;
}

export function reHideCard(game) {
  for (let i = 0; i < 16; i++) {
    if(!game.cards[i].matched) {
      $("#" + i.toString()).delay(750).fadeOut();
    }
  }
}

