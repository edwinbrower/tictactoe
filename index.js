let board = [ [,,, ], [,,, ], [,,, ] ];
let playerSwitch = true; // If true then player1. if false player2
let movesLeft = 9;
let gameWon = false;

let checkForWin = () => {

};

let playMove = (input) => {
  
};

let getInput = () => {
  if (playerSwitch) {
    console.log('Player 1 it is your turn');
  } else {
    console.log('Player 2 it is your turn');
  }
  console.log('Enter "l", "m", or "r", to play the left, middle, or right spots');
  let input = '';
  while (input !== 'l' && input !== 'm' && input !== 'r') {
    input = 'l';
  }
  console.log('You have played ' + input);
  return input;
};

while (movesLeft && !gameWon) {
  console.log(board);
  let input = getInput();
  playMove(input);
  checkForWin();

  if (gameWon) {
    let winner = playerSwitch ? '1' : '2';
    console.log('Congrats! Player ' + winner + ' you have won!');
    return;
  }
  playerSwitch = !playerSwitch;
  movesLeft--;
}

console.log('Game Over: Stalemate');

