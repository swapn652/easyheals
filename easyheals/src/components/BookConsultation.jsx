import React from 'react';

export const BookConsultation = () => {
  return (
    <div className="relative flex flex-col">
      <img src="/plus_bg_2.png" className="w-24 top-36" alt="Plus2" />
      <div className="absolute top-16 md:text-[32px] lg:text-[39px] w-[525px] font-semibold">
        <div>Book Consultation & Lab</div>
        <div className="absolute md:left-[85px] lg:left-12">
          <span>Tests </span>
          <span className="text-green2">anytime & anywhere</span>
        </div>
      </div>
      <div className="absolute md:top-44 lg:top-48 md:left-[85px] lg:left-12 md:text-[0.8em] lg:text-[0.69em] md:w-[400px] lg:w-[430px] text-left">
        Taking care of your well-being has never been easier.
        Book lab tests with utmost convenience through easyheals.
      </div>
    </div>
  );
};
