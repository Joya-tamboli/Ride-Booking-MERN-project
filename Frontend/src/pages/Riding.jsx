import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
      <Link to='/home'  className='fixed flex items-center justify-center w-10 h-10 bg-white rounded-full right-2 top-2'>
        <i className='text-lg font-medium ri-home-5-line'></i>
      </Link>
        <div className='h-1/2'>
        <img
          className='object-cover w-full h-full'
          src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'
          alt='Background'
        />
        </div>
        <div className='p-4 h-1/2'>
        <div className='flex items-center justify-between'>
        <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium capitalize'>Rohit</h2>
          <h4 className='-mt-1 -mb-1 text-xl font-semibold'>MH 09 1234</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          
        </div>
      </div>

      <div className='flex flex-col items-center justify-between gap-2'>
        <div className='w-full mt-5'>
          
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='-mt-1 text-sm text-gray-600'>FC road , shivaji nagar , pune</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹193.20 </h3>
              <p className='-mt-1 text-sm text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    <button className='w-full p-2 mt-5 font-semibold text-white bg-green-600 rounded-lg'>Make a Payment</button>

        </div>
    </div>
  )
}

export default Riding