import React from 'react'

export const Tooo = () => {
  return (
    <div className='grid grid-cols-6 grid-rows-6 gap-3'>
        <div className="col-start-1 col-end-3 h-20 w-36 bg-purple">
          1
        </div>
        <div className="col-start-1 col-end-3 h-20 w-36 bg-purple">
          2
        </div>
        <div className="col-start-4 col-end-6 row-start-2 row-end-4 h-20 w-36 bg-purple">
          3
        </div>
        <div className="col-start-1 col-end-4 h-20 w-36 bg-purple">
          4
        </div>
    </div>
  )
}
