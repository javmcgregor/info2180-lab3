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

                // Switch player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    }
});
