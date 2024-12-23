import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setIsXNext(!isXNext);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }} className="tic-tac-toe">
      <h1 className="game-title">Tic Tac Toe</h1>
      {winner ? (
        <h2 className="game-winner" data-testid="winner">Winner: {winner}</h2>
      ) : (
        <h2 className="game-next-player" data-testid="next-player">Next Player: {isXNext ? 'X' : 'O'}</h2>
      )}
      <div
        className="game-board"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '5px', justifyContent: 'center' }}
      >
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="board-cell"
            data-testid={`cell-${index}`}
            style={{ width: '100px', height: '100px', fontSize: '24px' }}
          >
            {value}
          </button>
        ))}
      </div>
      <button
        onClick={resetGame}
        className="game-restart"
        data-testid="restart-button"
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Restart Game
      </button>
    </div>
  );
};


export default App