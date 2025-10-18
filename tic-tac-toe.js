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
    const squ = document.querySelectorAll('#board div');
    const statusDiv = document.getElementById('status');
    const newGameBtn = document.querySelector('.btn');
    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];

    // Add the square class to each div
    for (let i = 0; i < squ.length; i++) {
        squ[i].classList.add('square');

        //Handles the clicks on each square.
        squ[i].addEventListener('click', function () {
            //Prevents the changing of squares or playing after a win
            if (squ[i].textContent !== '' || statusDiv.classList.contains('you-won')) return;

            squ[i].textContent = currentPlayer;
            squ[i].classList.add(currentPlayer);
            gameState[i] = currentPlayer;

            // Checks for a winner
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
                //Switches the players.
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });

        // Manages the hover effect over the squares
        squ[i].addEventListener('mouseover', function () {
            squ[i].classList.add('hover');
        });
        squ[i].addEventListener('mouseout', function () {
            squ[i].classList.remove('hover');
        });
    }

    // Resets game after the New game button is clicked
    newGameBtn.addEventListener('click', function () {
        for (let i = 0; i < squ.length; i++) {
            squ[i].textContent = '';
            squ[i].classList.remove('X', 'O');
        }
        gameState = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDiv.classList.remove('you-won');
    });
});
