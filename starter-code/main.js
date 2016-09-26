console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if(cardOne === cardTwo){
  alert('You found a match!');
} else {
  alert('Sorry, try again!');
}*/

var createCards = function{
  var gameBoard = document.getElementById('game-board');
    for(i = 0; i < 4; i++){
      var card = document.createElement('div');
      card.className = 'card';
      document.getElementByClassName('div').appendChild(card);
      }
}

var cards = [queen, queen, king, king];
var cardsInPlay = [];

for (var i = 0; i < cards.length; i++){

  cardElement.setAttricbute('data-card', cards[i]);
}


for (vari=0; i<cards.length; i++){
  cardElement.addEventListener('click', isTwoCards)
}

var isMatch = function(){

}

var isTwoCards = function(){

}

