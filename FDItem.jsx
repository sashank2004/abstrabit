// src/components/FDItem.js
import React from 'react';
import './FDItem.css';

const FDItem = ({ name, start, end}) => {
  // Convert start and end dates to a position/length in the timeline
  const startDate = new Date(start);
  const endDate = new Date(end);
  const startMonth = startDate.getFullYear() * 12 + startDate.getMonth();
  const endMonth = endDate.getFullYear() * 12 + endDate.getMonth();
  const length = endMonth - startMonth;

  const style = {
    gridColumnStart: startMonth - (2024 * 12) + 1, // Offset for the starting year
    gridColumnEnd: `span ${length + 1}`
  };

  return (
    <div className="fd-item" style={style}>
      {name}
    </div>
  );
};

export default FDItem;
