import React from 'react'

export const BookConsultation = () => {
  return (
    <div className="w-screen flex flex-col">
      <img src="/plus_bg_2.png" className="w-36"/>
        <div className="text-5xl flex flex-wrap w-[700px] justify-start font-semibold ml-24 -mt-14">
            <div>Book Consultation & Lab</div>
            <div>
                <span>Tests </span>
                <span className="text-green2">anytime & anywhere</span>
            </div>
        </div>
        <div className="text-sm flex flex-wrap w-[700px] ml-24">
            Taking care of your well-being has never been easier.
            Book lab tests with utmost <div className="self-start">convenience through easyheals.</div>
        </div>
    </div>
  )
}
