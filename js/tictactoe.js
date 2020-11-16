const GameBoard = (() => {
    const board = [null, null, null, null, null, null, null, null, null];
    let winCondition = false;

    const getGameBoard = () => board;
    const getWinCondition = () => winCondition;

    const checkCell = (p1, p2, p3) => {
        if (board[p1] != null && board[p1] == board[p2] && board[p1] == board[p3]) {
            winCondition = true;
        }
    }

    const reset = () => {
        for (i in board) { board[i] = null };
        displayController.update();
    }

    const checkWin = (players, turn) => {
        checkCell(0,1,2);
        checkCell(3,4,5);
        checkCell(6,7,8);
        checkCell(0,3,6);
        checkCell(1,4,7);
        checkCell(2,5,8);
        checkCell(0,4,8);
        checkCell(2,4,6);
        if (winCondition) { alert(`${players[turn % 2].playerName} has won the game at turn ${turn}!`)};
    }

    return { getGameBoard, getWinCondition, checkWin, reset }
})();

const displayController = (() => {
    const displayDiv = document.querySelector('#display');
    
    const populate = () => {
        for (i in GameBoard.getGameBoard()) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', i);
            cell.textContent = GameBoard.getGameBoard()[i];
            displayDiv.appendChild(cell);
        }
    }

    const update = () => {
        for (i in GameBoard.getGameBoard()) {
            const cell = document.getElementById(i);
            cell.textContent = GameBoard.getGameBoard()[i];
        }
    }
    return {populate, update};
})();

const Player = (name, symbol) => {
    const playerName = name;
    const playerSymbol = symbol;

    const makeMove = (pos) => {
        GameBoard.getGameBoard()[pos] = symbol;
        displayController.update();
    };

    return { playerName, playerSymbol, makeMove }
};

const Game = (() => {
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');
    const players = [player1, player2];
    let turn = 0;
    
    const init = () => {
        displayController.populate();
        addEventHandlers();
    }

    const addEventHandlers = () => {
        const divs = document.querySelectorAll('.cell');
        divs.forEach((div) => {
            div.addEventListener('click', () => {
                if (div.textContent != '') {
                    alert('Wrong move!');
                } else {
                    players[turn % 2].makeMove(div.id);
                    GameBoard.checkWin(players, turn);
                    turn++;
                }
            })
        })
    }
    init();
})();

const Controls = (() => {
    const start = document.querySelector('#start');
    const reset = document.querySelector('#reset');

    reset.addEventListener('click', GameBoard.reset);
})();