import React from 'react';

export const LocationDoctors = () => {
  return (
    <div
  style={{
    borderRadius: '8px',
    border: '0.5px solid rgba(117, 117, 117, 0.50)',
    boxShadow: '0px 4px 40px 0px rgba(57, 57, 57, 0.20)',
  }}
  className="flex flex-row w-[620px] h-16 items-center text-left justify-between px-4"
> <div className="flex flex-col">
        <div className="text-[9px] text-green2">Location</div>
        <div className="text-[11px] mt-[2px]">Delhi</div>
      </div>
      <div className="border-r border-gray-400 pr-4 h-8 mt-[4px] text-lineColor opacity-30">
      </div>
      <div className="flex flex-col ml-4">
        <div className="text-[9px] text-green2">Doctor/Speciality</div>
        <div className="text-[11px] mt-[2px]">Search by Doctors, Hospitals, Diseases, etc.</div>
      </div>
      <button
        className="text-white h-10 w-32 p-2 rounded-md font-[Poppin] ml-20"
        style={{
          background: 'var(--icon-orange, linear-gradient(134deg, #EA5F24 7.31%, #CD2C01 78.04%))',
        }}
      >
        Search
      </button>
    </div>
  );
};
