import React from 'react';

export const Doctor = () => {
  return (
    <div className="relative">
      {/* Plus image on top left of doctor */}
      <img src="plus_3.png" className="
        absolute
        md:w-16 
        md:h-16 
        md:top-8 
        md:left-12 
        lg:w-32 
        lg:h-32 
        lg:top-10 
        lg:left-24 
        xl:w-36 
        xl:h-36 
        xl:top-10" 
      />
      
      {/* Doctor's image */}
      <img src="femdoctor.png" className="
        absolute
        lg:w-[470px] 
        lg:h-[470px] 
        xl:w-[600px] 
        xl:h-[500px] 
        mt-4 
        z-10" 
      />

      {/* Plus image on right of doctor */}
      <img src="plus_1.png" className="
        absolute
        mt-2  
        md:w-20 
        md:h-20 
        md:left-[12.5em] 
        md:top-[8em] 
        lg:w-36 
        lg:h-36 
        lg:left-[23em] 
        lg:top-[14em] 
        xl:w-40 
        xl:h-40 
        xl:left-96 
        xl:top-56" />
    </div>
  );
};
