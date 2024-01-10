import React, { useState } from 'react';
import '../styles/SudokuBoard.css';
import Cell from './Cell';
import NumberSelector from './NumberSelectors';


const SudokuBoard = () => {
  const initialBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  const [board, setBoard] = useState(initialBoard);

  const handleCellValueChange = (row, col, value) => {
    const newBoard = [...board];
    newBoard[row][col] = value;
    setBoard(newBoard);
  };

  return (
    <div className="sudoku-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cellValue, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cellValue}
              onChange={(value) => handleCellValueChange(rowIndex, colIndex, value)}
              // Disable editing for non-zero values
              disabled={cellValue !== 0}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuBoard;
