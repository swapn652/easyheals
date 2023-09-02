import React from 'react';

export const BookConsultation = () => {
  return (
    <div className="relative flex flex-col">
      <img src="/plus_bg_2.png" className="w-24 absolute right-[22em]" alt="Plus2" />
      <div className="absolute top-16 text-[39px] w-[525px] font-semibold">
        <div>Book Consultation & Lab</div>
        <div className="absolute left-12">
          <span>Tests </span>
          <span className="text-green2">anytime & anywhere</span>
        </div>
      </div>
      <div className="absolute top-48 left-12 text-xs w-[500px] text-left">
        Taking care of your well-being has never been easier.
        Book lab tests with utmost convenience through easyheals.
      </div>
    </div>
  );
};
