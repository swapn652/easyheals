import React from 'react';

export const ServicesProvided = () => {
  return (
    <div style={{
        borderRadius: '10px',
        background: '#FFF',
        boxShadow: '0px 2px 40px 0px rgba(96, 96, 96, 0.20)'
    }}
    className="w-[1200px] h-24 py-2 px-10 flex flex-row gap-x-16 ">
      <div className="flex flex-col items-center justify-center">
        <img src="/services/doctor.png" className="w-10 h-10" alt="Doctor" />
        <div className="text-xs">Top Rated Doctors</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="/services/hospital.png" className="w-10 h-10" alt="Hospital" />
        <div className="text-xs">Find Best Hospitals</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="/services/blood-sample.png" className="w-10 h-10" alt="Rupee" />
        <div className="text-xs">Book Lab Tests</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center">
          <img src="/services/surgery-room.png" className="w-6 py-4" alt="Surgery Room" />
        </div>
        <div className="text-xs">Compare & Book Surgeries</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-10 h-10 bg-cyan rounded-full flex items-center justify-center">
          <img src="/services/fever.svg" className="w-7 py-4" alt="Fever" />
        </div>
        <div className="text-xs">Treatment by Symptoms</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="/services/orthopaedics.png" className="w-10 h-10" alt="Orthopaedics" />
        <div className="text-xs">Search by Specialities</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="/services/lung-cancer.png" className="w-10 h-10" alt="Lung Cancer" />
        <div className="text-xs">Treatment by Diseases</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="/services/rupee.png" className="w-10 h-10" alt="Rupee" />
        <div className="text-xs w-24">Compare prices & services</div>
      </div>
    </div>
  );
};
