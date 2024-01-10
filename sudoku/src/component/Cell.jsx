import React from 'react';

const Cell = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value) || 0);
  };

  return (
    <input
      type="text"
      min="1"
      max="9"
      value={value === 0 ? '' : value}
      onChange={handleChange}
      className="cell"
    />
  );
};

export default Cell;
