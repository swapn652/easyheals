import React from 'react';

export const BookConsultation = () => {
  return (
    <div className="relative flex flex-col">
      <img src="/plus_bg_2.png" className="hidden md:block w-24 top-36" alt="Plus2" />
      <div className="
        absolute 
        sm:top-4 
        sm:left-10 
        sm:w-[285px] 
        sm:text-[24px] 
        md:top-16 
        md:w-[485px] 
        md:text-[32px] 
        lg:text-[39px] 
        font-semibold"
      >
        <div>Book Consultation & Lab</div>
        <div className="absolute md:left-[2em] lg:left-12">
          <span>Tests </span>
          <span className="text-green2">anytime & anywhere</span>
        </div>
      </div>
      <div className="
        absolute 
        sm:top-24 
        sm:left-10 
        sm:w-[320px] 
        md:top-44 
        md:left-[8.4em] 
        md:text-[0.8em] 
        md:w-[400px] 
        lg:top-48 
        lg:left-12 
        lg:text-[0.69em] 
        lg:w-[430px] 
        text-left">
        Taking care of your well-being has never been easier.
        Book lab tests with utmost convenience through easyheals.
      </div>
    </div>
  );
};