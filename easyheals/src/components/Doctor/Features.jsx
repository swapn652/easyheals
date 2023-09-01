import React from 'react';

export const Features = ({ svg, text }) => {
  return (
    <div className="bg-white p-4 rounded-2xl w-40 flex flex-row">
      {svg}
      <p className="text-gray-700 text-xs text-left">{text}</p>
    </div>
  );
};

