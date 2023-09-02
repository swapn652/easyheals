import React from 'react';
import { BookConsultation } from './BookConsultation';
import { ServicesProvided } from './ServicesProvided';
import { LocationDoctors } from './LocationDoctors';
import { DoctorWithFeatures } from './Doctor/DoctorWithFeatures';

export const MainSection = () => {
  return (
    <div className="flex flex-col relative mt-12">
      <div className="flex flex-row lg:gap-x-[320px] xl:gap-x-[380px] h-[4em] w-screen absolute">
        <div className="md:w-1/2 lg:w-1/3 absolute"> 
          <BookConsultation />
          <div className="mt-10 absolute top-56 left-12">
            <LocationDoctors />
          </div>
        </div>
        <div className="md:w-1/3 lg:w-1/3 mt-[70px] absolute bottom-24 right-[6.5em]">
          <DoctorWithFeatures  />
        </div>
      </div>
      <div className="z-10 mt-10 absolute top-[22em] left-12">
        <ServicesProvided />
      </div>
    </div>
  );
};
