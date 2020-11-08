const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    const getGameBoard = () => board;
    const setGameBoard = (player, position) => {
        if (position >= 0 || position <= 8) {
            board[position] = player.getPlayerSymbol;
        } else {
            alert('Yikes. That was an invalid move.');
        }
    }
    return {getGameBoard, setGameBoard};
})();

const displayController = (() => {
    const displayDiv = document.querySelector('#display');
    const populateDisplay = () => {
        for (i in gameBoard.getGameBoard()) {
            const div = document.createElement('div');
            div.setAttribute('class', 'board-cell');
            div.textContent = gameBoard.getGameBoard()[i];
            displayDiv.appendChild(div);
        };
    };
    return {populateDisplay};
})();

const PlayerFactory = (name, symbol) => {
    const getPlayerName = () => name;
    const getPlayerSymbol = () => symbol;

    return {getPlayerName, getPlayerSymbol};
}

displayController.populateDisplay();