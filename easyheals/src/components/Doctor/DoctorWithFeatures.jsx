import React from 'react'
import { Features } from './Features';
import { Doctor } from './Doctor';

export const DoctorWithFeatures = () => {
    const searchSVG = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          className="text-green-500 w-6 h-6 mr-2"
        >
          <path
              d="M11.796 21.65C17.2061 21.65 21.5919 17.2642 21.5919 11.8541C21.5919 6.44391 17.2061 2.05811 11.796 2.05811C6.3858 2.05811 2 6.44391 2 11.8541C2 17.2642 6.3858 21.65 11.796 21.65Z"
              stroke="#4DAE45"
              strokeWidth="3.47443"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.1895 27.2476L18.793 18.8511"
              stroke="#4DAE45"
              strokeWidth="3.47443"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
        </svg>
      );
    
      const noteSVG = (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="37" viewBox="0 0 30 37" fill="none" className="text-green-500 w-[25px] h-[25px] flex mr-2">
          <path d="M9.3357 6.05078H5.73719C4.7828 6.05078 3.86751 6.42991 3.19265 7.10476C2.5178 7.77961 2.13867 8.69491 2.13867 9.6493V31.2404C2.13867 32.1948 2.5178 33.1101 3.19265 33.7849C3.86751 34.4598 4.7828 34.8389 5.73719 34.8389H23.7298C24.6842 34.8389 25.5994 34.4598 26.2743 33.7849C26.9492 33.1101 27.3283 32.1948 27.3283 31.2404V9.6493C27.3283 8.69491 26.9492 7.77961 26.2743 7.10476C25.5994 6.42991 24.6842 6.05078 23.7298 6.05078H20.1313" stroke="#4DAE45" stroke-width="3.47443" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.533 2.45215H12.9345C10.947 2.45215 9.33594 4.06326 9.33594 6.05066C9.33594 8.03807 10.947 9.64918 12.9345 9.64918H16.533C18.5204 9.64918 20.1315 8.03807 20.1315 6.05066C20.1315 4.06326 18.5204 2.45215 16.533 2.45215Z" stroke="#4DAE45" stroke-width="3.47443" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.533 25.8425H20.1315M9.33594 18.6455H9.35393H9.33594ZM16.533 18.6455H20.1315H16.533ZM9.33594 25.8425H9.35393H9.33594Z" stroke="#4DAE45" stroke-width="3.47443" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      );

  return (
    <div className="w-[500px] relative">
        <div className="absolute lg:right-[26em] lg:top-[15em] xl:right-[25em] xl:top-60">
            <Features svg={noteSVG} text="Book an appointment"/>
        </div>
        <div className="absolute lg:top-[10.5em] xl:top-[9.5em] lg:left-4 xl:left-10">
            <Features svg={searchSVG} text="Well Qualified doctors"/>
        </div>
        <div className="">
            <Doctor/>
        </div>
    </div>
    // <div className="">
    //   <Doctor/>
    // </div>
  
  )
}
