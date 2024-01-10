import React from 'react';

const NumberSelector = ({ onSelect }) => {
  const handleClick = (number) => {
    onSelect(number); // Function to pass selected number to the cell
  };

  return (
    <div className="number-selector">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
        <button key={number} onClick={() => handleClick(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default NumberSelector;
