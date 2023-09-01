import React from 'react';

export const Partners = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-x-4 mx-auto">
        <span className="border-b border-lineColor text-lineColor opacity-30 w-[425px] mr-2"></span>
        <img src="/PlusIcon.svg"/>
        <span className="text-2xl font-[Poppins] font-semibold">Our Trusted Partners</span>
        <img src="/PlusIcon.svg"/>
        <span className="border-b border-lineColor text-lineColor opacity-30 w-[425px] ml-2"></span>
      </div>
      <div className="flex flex-row gap-x-20 mx-auto mt-10">
        <img src="/RubyHallClinic.png" className="w-52 h-14"/>
        <img src="/DrAgarwals.png" className="w-52 h-16"/>
        <img src="/UnityHospital.png" className="w-32 h-14"/>
        <img src="/Orion.png" className="w-32 h-14"/>
        <img src="/Sahyadri.png" className="w-32 h-14"/>
      </div>
    </div>
  );
};
