window.addEventListener("DOMContentLoaded", function() {
window.onload = function() {
    const board = document.getElementById('board');

    const square = board.querySelectorAll('div');
}

square.forEach(square => {
        square.classList.add('square');
    });
});

window.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];

    // Adds the squares class to all squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('square');

        // Allows you to click a square to place X or O
        squares[i].addEventListener('click', function () {
            if (squares[i].textContent === '') {
                squares[i].textContent = currentPlayer;
                squares[i].classList.add(currentPlayer);
                gameState[i] = currentPlayer;
            
            
                //Code runs an if statement to check for the winner
                if (
                    (gameState[0] === currentPlayer && gameState[1] === currentPlayer && gameState[2] === currentPlayer) ||
                    (gameState[3] === currentPlayer && gameState[4] === currentPlayer && gameState[5] === currentPlayer) ||
                    (gameState[6] === currentPlayer && gameState[7] === currentPlayer && gameState[8] === currentPlayer) ||
                    (gameState[0] === currentPlayer && gameState[3] === currentPlayer && gameState[6] === currentPlayer) ||
                    (gameState[1] === currentPlayer && gameState[4] === currentPlayer && gameState[7] === currentPlayer) ||
                    (gameState[2] === currentPlayer && gameState[5] === currentPlayer && gameState[8] === currentPlayer) ||
                    (gameState[0] === currentPlayer && gameState[4] === currentPlayer && gameState[8] === currentPlayer) ||
                    (gameState[2] === currentPlayer && gameState[4] === currentPlayer && gameState[6] === currentPlayer)
                ) {
                    statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    statusDiv.classList.add('you-won');
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
            
        // Handles the hover effect over the squares.
        squares[i].addEventListener('mouseover', function () {
            squares[i].classList.add('hover');
        });
        squares[i].addEventListener('mouseout', function () {
            squares[i].classList.remove('hover');
        });
    }
});
