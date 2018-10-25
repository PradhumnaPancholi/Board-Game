// Step 1a - Select and store the gameboard element
const gameboard = document.querySelector("#gameboard");
// Step 1b - Select and store the score element
const score = document.querySelector("#score")
// Step 1c - Select and store the cards element
const cards = document.querySelector("#cards")
// Step 1d - Select and store the message element
const message = document.querySelector("#message")

// Step 2 - Create an array of cards
const cardValues = ['A', 10, 9, 8, 7, 6, 5, 4, 3, 2,'K', 'Q', 'J'];
let deck = [];

// Step 2a - Create a function to shuffle the deck
function shuffleDeck () {
  // Step 2b - Create a placeholder array

  // Step 2c - Iterate through card values 4 times
   for (var i = 0;i < cardValues.length * 4; i++) {

    // Step 2d - Using a conditional loop
    if (cardValues != 0) {
      // Step 2e - Select a random card from the array
      var randomCard = cardValues[Math.floor(Math.random() * cardValues.length)];

      // Step 2f - Add the card to the deck array
   
      deck.push(randomCard)
       
     }
    }
  }


// Step 2g - Call the shuffleDeck function
shuffleDeck();

// Step 3a - Create an array to store 2 players
const players = ["player1", "player2"]
let player1Score = 0;
let player2Score = 0;

// Step 3b - Create a variable to store the current player
let currentPlayer = players[0];

// Step 3c - Create variable to store the first selected card
let currentCard;


// Step 4 - Iterate through the deck and bind a click event to each one
deck.forEach(function(element) {
  //Step 4a - Create a new div element to be a card
  var cardEle = document.createElement("div");
  document.getElementById('cards').appendChild(cardEle);

  // Step 3b - Add a 'card' class to the class list on the new div element
  cardEle.classList.add('card');

  // Step 3c - Add a data value to the card with the card's value in it
  cardEle.dataset.value = element;

  // Step 3c - Bind the cardSelected function
  // to the click event on the cardEle
  cardEle.addEventListener("click", cardSelected);
 // cards.appendChild(cardEle);
});



// Step 5 - Create a function to store the logic
// for when a card is selected
function cardSelected (e) {
  // Step 5a - Check if there is already a card selected
  e.target.innerHTML = e.target.dataset.value;
  if(currentCard) {
  // Step 6 - Compare the cards
    if(e.target.dataset.value === currentCard){
  // Step 6b - Add a class to the 2 card elements
  // flipping them over
      e.target.classList.add('flipped');

 // Step 6c - Add a point to the score for this player
    currentPlayer == players[0] ? player1Score  += 1 : player2Score  += 1;

  //     // Step 6d - Tell the player to go again
  //     // (use string interpolation to show which player you're addressing)
       message.textContent = `Congratulations! ${currentPlayer}, please go again!`;
    } else {
    // Step 6e - Provide a fail message to the player
    message.textContent = "Oh, so sorry!!! But yer' not psychic!";

      // Step 6f - Using a ternary, change players
      currentPlayer == players[0] ? currentPlayer = players[1] : currentPlayer = players[0];
      currentCard = undefined;

  //     // Step 6g - Concatenate a message to the message element
  //     // advising player 2 that it's their turn now
  //     // (use string interpolation to show which player you're addressing)
      message.textContent = `${currentPlayer} , your turn!`;
     }
   } else {
  //   // Step 5b - Assign the card to currentCard
    currentCard = e.target.dataset.value;

   // Step 5c - Tell the player to select another card
   // (use string interpolation to show which player you're addressing)
    message.textContent = `${currentPlayer}, please select another card`;
   }

  // // Step 7 - Check if the board is full
   if(deck === cardValues.length) {
  //   // Step 7a - Check if one of the players has won
 
       if(player1Score != player2Score) {
        player1Score > player2Score ? currentPlayer = players[0] : currentPlayer = players[1];
       // Step 7b - Tell the player they've won
       message.textContent = `${currentPlayer}, you won!!! Congratulations!`;
     } else {
       // Step 7c - Tell the players that the game has ended in a tie
       message.textContent = "The game was a tie! Nice try!";
     }
   }
}