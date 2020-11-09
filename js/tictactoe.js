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
            if (board[pos1] == board[pos2] && board[pos1] == board[pos3]) {
                winConditionMet = true;
            }
        }
    }

    const checkWinLoop = (board) => {
        checkCellState(0,1,2);
        checkCellState(3,4,5);
        checkCellState(6,7,8);
        checkCellState(0,3,6);
        checkCellState(1,4,7);
        checkCellState(2,5,8);
        checkCellState(0,4,8);
        checkCellState(2,4,6);
    }
    return {getGameBoard, getWinCondition, setGameBoard, checkCellState};
})();

const displayController = (() => {
    const displayDiv = document.querySelector('#display');
    const populateDisplay = () => {
        for (i in gameBoard.getGameBoard()) {
            const div = document.createElement('div');
            div.setAttribute('class', 'board-cell');
            div.setAttribute('id', i);
            div.textContent = gameBoard.getGameBoard()[i];
            displayDiv.appendChild(div);
        };
    };
    return {populateDisplay};
})();

const Player = (name, symbol) => {
    const getPlayerName = () => name;
    const getPlayerSymbol = () => symbol;

    const makeMove = (board, target) => {
        board[target.id] = this.symbol;
        target.textContent = this.symbol;
    }

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