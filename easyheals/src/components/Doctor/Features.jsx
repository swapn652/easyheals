import React from 'react';

export const Features = ({ svg, text }) => {
  return (
    <div className="bg-white p-2 rounded-2xl w-[120px] flex flex-row">
      {svg}
      <p className="text-gray-700 text-[10px] text-left">{text}</p>
    </div>
  );
};

