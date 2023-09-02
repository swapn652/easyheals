import React from 'react';
import { BookConsultation } from './BookConsultation';
import { ServicesProvided } from './ServicesProvided';
import { LocationDoctors } from './LocationDoctors';
import { DoctorWithFeatures } from './Doctor/DoctorWithFeatures';

export const MainSection = () => {
  return (
    <div className="flex flex-col relative mt-12">
      <div className="flex flex-row lg:gap-x-[320px] xl:gap-x-[380px] lg:h-[6em] xl:h-[4em] w-screen absolute">
        <div className="absolute lg:bottom-2 xl:top-1"> 
          <BookConsultation />
          <div className="mt-10 absolute top-56 lg:left-12">
            <LocationDoctors />
          </div>
        </div>
        <div className="lg:w-1/3 mt-[70px] absolute lg:right-[2em] lg:bottom-[8em] xl:bottom-24 xl:right-[6.5em] 2xl:right-[10em]">
          <DoctorWithFeatures  />
        </div>
      </div>
      <div className="z-10 mt-10 absolute top-[22em] lg:left-12">
        <ServicesProvided />
      </div>
    </div>
  );
};
