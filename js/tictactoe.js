const gameBoard = (() => {
    const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
    const getGameBoard = () => board;
    const setGameBoard = (player, position) => {
        if (position >= 0 || position <= 8) {
            board[position] = player.getPlayerSymbol;
        } else {
            alert("Yikes. That was an invalid move.");
        }
    }
    return {getGameBoard, setGameBoard};
})();

const displayController = (() => {
    
})();

const PlayerFactory = (name, symbol) => {
    const getPlayerName = () => name;
    const getPlayerSymbol = () => symbol;

    return {getPlayerName, getPlayerSymbol};
}