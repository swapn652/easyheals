import React from 'react';

export const Partners = () => {
  return (
    <div className="flex flex-col w-screen">
      <div className="flex items-center justify-center gap-x-4 mx-auto">
        <span className="border-b border-lineColor text-lineColor opacity-30 md:w-[220px] lg:w-[320px] xl:w-[425px] mr-2"></span>
        <img src="/PlusIcon.svg" alt="Plus Icon" />
        <span className="text-xl font-[Poppins] font-semibold">Our Trusted Partners</span>
        <img src="/PlusIcon.svg" alt="Plus Icon" />
        <span className="border-b border-lineColor text-lineColor opacity-30 md:w-[220px] lg:w-[320px] xl:w-[425px] ml-2"></span>
      </div>

      <div className="hidden lg:flex flex-row lg:gap-x-14 xl:gap-x-20 mx-auto mt-10">
        <img src="/RubyHallClinic.png" className="lg:w-44 lg:h-12 xl:w-52 xl:h-14" alt="Ruby Hall Clinic" />
        <img src="/DrAgarwals.png" className="lg:w-44 lg:h-12 xl:w-52 xl:h-16" alt="Dr. Agarwals" />
        <img src="/UnityHospital.png" className="lg:w-24 lg:h-12 xl:w-32 xl:h-14" alt="Unity Hospital" />
        <img src="/Orion.png" className="lg:w-24 lg:h-12 xl:w-32 xl:h-14" alt="Orion" />
        <img src="/Sahyadri.png" className="lg:w-24 lg:h-12 xl:w-32 xl:h-14" alt="Sahyadri" />
      </div>


      <div className="lg:hidden flex flex-row md:gap-x-20 lg:gap-x-16 mx-auto mt-10 flex-wrap">
        <div className="flex flex-row mx-auto gap-x-20">
          <img src="/RubyHallClinic.png" className="w-42 h-12" alt="Ruby Hall Clinic" />
          <img src="/DrAgarwals.png" className="w-42 h-12" alt="Dr. Agarwals" />
          <img src="/UnityHospital.png" className="w-32 h-14" alt="Unity Hospital" />
        </div>
        <div className="flex flex-row mx-auto gap-x-20 mt-10">
          <img src="/Orion.png" className="w-24 h-12" alt="Orion" />
          <img src="/Sahyadri.png" className="w-24 h-12" alt="Sahyadri" />
        </div>
      </div>
    </div>
  );
};
