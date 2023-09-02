import React from 'react';

export const LocationDoctors = () => {
  return (
    <div
  style={{
    borderRadius: '8px',
    border: '0.5px solid rgba(117, 117, 117, 0.50)',
    boxShadow: '0px 4px 40px 0px rgba(57, 57, 57, 0.20)',
  }}
  className="flex flex-row lg:w-[520px] xl:w-[620px] h-16 items-center text-left justify-between px-4"
> 
    <div className="flex flex-col">
        <div className="lg:text-[8px] text-[9px] text-green2">Location</div>
        <div className="lg:text-[9px] text-[11px] mt-[2px]">Delhi</div>
      </div>
      <div className="border-r border-gray-400 pr-4 h-8 mt-[4px] text-lineColor opacity-30">
      </div>
      <div className="flex flex-col ml-4">
        <div className="lg:text-[8px] xl:text-[9px] text-green2">Doctor/Speciality</div>
        <div className="lg:text-[9px] xl:text-[11px] mt-[2px]">Search by Doctors, Hospitals, Diseases, etc.</div>
      </div>
      <button
        className="text-white lg:h-8 lg:w-28 xl:h-10 xl:w-32 xl:p-2 rounded-md font-[Poppin] ml-20"
        style={{
          background: 'var(--icon-orange, linear-gradient(134deg, #EA5F24 7.31%, #CD2C01 78.04%))',
        }}
      >
        Search
      </button>
    </div>
  );
};
