const gameBoard = (() => {
    const board = [null, null, null, null, null, null, null, null, null];
    let winConditionMet = false;
    
    const getGameBoard = () => board;
    const getWinCondition = () => winConditionMet;

    const setGameBoard = (player, position) => {
        if (position >= 0 || position <= 8) {
            board[position] = player.getPlayerSymbol;
        } else {
            alert('Yikes. That was an invalid move.');
        }
    }

    const checkCellState = (pos1, pos2, pos3) => {
        if (pos2 == undefined && pos3 == undefined) {
            return board[pos1];
        } else {
            if (pos1 == pos2 && pos1 == pos3) {
                winConditionMet = true;
            }
        }
    }

    const checkWinLoop = (board) => {

    }
    return {getGameBoard, getWinCondition, setGameBoard, checkCellState};
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

const Player = (name, symbol) => {
    const getPlayerName = () => name;
    const getPlayerSymbol = () => symbol;

    return {getPlayerName, getPlayerSymbol};
}

const Game = () => {
    while (!winConditionMet) {
        player1
    }
};

let player1 = Player('Player 1', 'X');
let player2 = Player('Player 2', 'O');
displayController.populateDisplay();