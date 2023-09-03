import React from 'react';

export const Partners = () => {
  return (
    // The main container that contains the heading and all the partners
    <div className="
      flex 
      flex-col 
      w-screen 
      justify-center 
      self-center 
      mx-auto 
      items-center 
      text-center"
    >
      {/* Heading with plus icon and lines to the side */}
      <div className="
        flex 
        items-center 
        justify-center 
        gap-x-4 
        mx-auto"
      >
        {/* Line to the left */}
        <span className="
          border-b 
          border-lineColor 
          text-lineColor 
          opacity-30 
          w-[31vw]"
        >
        </span>
        {/* + sign */}
        <img 
          src="/PlusIcon.svg" 
          alt="Plus Icon" 
        />
        {/* Heading Our Trusted Partners */}
        <span 
          className="text-xl font-extrabold" 
          style={{fontStyle: 'Poppins'}}
        >
            Our Trusted Partners
        </span>
        {/* + icon */}
        <img 
          src="/PlusIcon.svg" 
          alt="Plus Icon" 
        />
        {/* Line to the right */}
        <span 
          className="border-b 
          border-lineColor 
          text-lineColor 
          opacity-30 
          w-[31vw]"
        >
        </span>
      </div>
    
    {/* Large Screen Devices */}
      <div className="hidden flex-row lg:flex lg:gap-x-14 xl:gap-x-20 mx-auto mt-10">
        <img src="partners/RubyHallClinic.png" className="lg:w-44 lg:h-12 xl:w-52 xl:h-14" alt="Ruby Hall Clinic" />
        <img src="partners/DrAgarwals.png" className="lg:w-44 lg:h-12 xl:w-52 xl:h-16" alt="Dr. Agarwals" />
        <img src="partners/UnityHospital.png" className="lg:w-24 lg:h-12 xl:w-32 xl:h-14" alt="Unity Hospital" />
        <img src="partners/Orion.png" className="lg:w-24 lg:h-12 xl:w-32 xl:h-14" alt="Orion" />
        <img src="partners/Sahyadri.png" className="lg:w-24 lg:h-12 xl:w-32 xl:h-14" alt="Sahyadri" />
      </div>

    {/* Medium Screen Devices */}
      <div className="hidden flex-row lg:hidden md:block gap-x-20 mx-auto mt-10 flex-wrap">
        <div className="flex flex-row mx-auto gap-x-20">
          <img src="partners/RubyHallClinic.png" className="w-42 h-12" alt="Ruby Hall Clinic" />
          <img src="partners/DrAgarwals.png" className="w-42 h-12" alt="Dr. Agarwals" />
          <img src="partners/UnityHospital.png" className="w-32 h-14" alt="Unity Hospital" />
        </div>
        <div className="flex flex-row mx-auto justify-center gap-x-20 mt-10">
          <img src="partners/Orion.png" className="w-24 h-12" alt="Orion" />
          <img src="partners/Sahyadri.png" className="w-24 h-12" alt="Sahyadri" />
        </div>
      </div>

    {/* Small Screen Devices */}
      <div className="
        md:hidden 
        flex 
        flex-row 
        w-[400px] 
        gap-x-10 
        left 
        overflow-auto 
        items-center 
        justify-center 
        gap-y-20 
        mx-auto 
        mt-10 
        mr-32"
      >
          <img src="partners/RubyHallClinic.png" className="w-40 h-12" alt="Ruby Hall Clinic" />
          <img src="partners/DrAgarwals.png" className="w-40 h-14" alt="Dr. Agarwals" />
          <img src="partners/UnityHospital.png" className="w-26 h-14" alt="Unity Hospital" />
          <img src="partners/Orion.png" className="w-32 h-14" alt="Orion" />
          <img src="partners/Sahyadri.png" className="w-32 h-22" alt="Sahyadri" />
      </div>

    </div>
  );
};
