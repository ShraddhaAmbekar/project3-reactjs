import React from 'react'

const SudokuBoard = () => {
  const initialBoard=[[0,0,0],
  [0,0,0],
  [0,0,0]];

  
  return (
    <div className="sudoku-board">
    {board.map((row, rowIndex) => (
      <div key={rowIndex} className="board-row">
        {row.map((cellValue, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            value={cellValue}
            onChange={(value) => handleCellValueChange(rowIndex, colIndex, value)}
          />
        ))}
      </div>
    ))}
  </div>
  )
}

export default SudokuBoard
