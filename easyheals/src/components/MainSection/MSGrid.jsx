import React from 'react'
import { BookConsultation } from './BookConsultation'
import { LocationDoctors } from './LocationDoctors'
import { ServicesProvided } from '../ServicesProvided'
import { DoctorWithFeatures } from './Doctor/DoctorWithFeatures'

export const MSGrid = () => {
  return (
    <div className="mt-10 grid grid-cols-12 grid-rows-4 gap-y-4">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2">
            <BookConsultation/>
        </div>
        <div className="ml-10 col-start-1 col-end-3 row-start-3 row-end-4">
            <LocationDoctors/>
        </div>
        <div className="ml-10 col-start-1 col-end-3 row-start-4 row-end-5 z-10">
            <ServicesProvided/>
        </div>
        <div className="z-0 col-start-8 col-end-10 row-start-1 row-end-2 -mt-10">
            <DoctorWithFeatures/>
        </div>
    </div>
  )
}
