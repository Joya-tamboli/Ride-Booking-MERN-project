import React from 'react'

const CaptainDetail = () => {
  return (
    <div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start gap-5'>
            <img className='object-cover w-10 h-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXF5ACUpC_BsOD5ntbFmDq4KC2xCESbHoMwQ&s" alt="" />
            <h4 className='text-lg font-medium'>Raghav Patel</h4>
          </div>
          <div>
            <h5 className='text-xl font-semibold'>₹295.2</h5>
            <p className='text-sm text-gray-600'>Earned</p>
          </div>
        </div>
          <div className='flex items-start justify-center gap-5 p-6 mt-6 bg-gray-100 rounded-xl'>
            <div className='text-center'>
              <i className='mb-2 text-3xl font-thin ri-timer-2-line'></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-500'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className='mb-2 text-3xl font-thin ri-speed-up-fill'></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-500'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className='mb-2 text-3xl font-thin ri-booklet-line'></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-500'>Hours Online</p>
            </div>
          </div>
    </div>
  )
}

export default CaptainDetail