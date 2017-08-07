let board = [ [,,, ], [,,, ], [,,, ] ];
let playerSwitch = true; // If true then player1. if false player2
let movesLeft = 9;
let gameWon = false;

while (movesLeft && !gameWon) {
  console.log(board);
  if (playerSwitch) {
    console.log('Player 1 it is your turn');

  } else {
    console.log('Player 2 it is your turn');

  }
  if (gameWon) {
    let winner = playerSwitch ? '1' : '2';
    console.log('Congrats! Player ' + winner + ' you have won!');
    return;
  }
  playerSwitch = !playerSwitch;
  movesLeft--;
}

console.log('Game Over: Stalemate');

