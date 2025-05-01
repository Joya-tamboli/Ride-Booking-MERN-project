import React from 'react'

const ConfirmedRide = (props) => {
  return (
    <div>
         <h5
        className='absolute top-0 w-full p-1 text-center'
        onClick={() => props.setConfirmedRidePanel(false)}
      >
        <i className='text-3xl text-black ri-arrow-down-wide-line'></i>
      </h5>
      <h3 className='mb-3 text-2xl font-semibold'>Confirm your Ride</h3>
      <div className='flex flex-col items-center justify-between gap-2'>
      <img className='h-20' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png' alt='' />
      </div>
      <div className='w-full mt-5'>
        <div className='flex items-center p-3 border-b-2 border-gray-400 '>
           <i className='text-lg ri-map-pin-2-fill'></i>
           <div >
            <h3 className='text-lg font-medium'>562/11 A</h3>
            <p className='-mt-1 text-sm text-gray-600'>FC Road , Shivaji nagar , pune</p>
           </div>
        </div>
        
        <div className='flex items-center p-3 border-b-2 border-gray-400 '>
        <i className='text-lg ri-map-pin-user-fill'></i>
           <div >
            <h3 className='text-lg font-medium'>562/11 A</h3>
            <p className='-mt-1 text-sm text-gray-600'>FC Road , Shivaji nagar , pune</p>
           </div>
        </div>
        
        
        <div className='flex items-center p-3 '>
        <i className='text-lg ri-currency-line'></i>
           <div >
            <h3 className='text-lg font-medium'>₹193.20</h3>
            <p className='-mt-1 text-sm text-gray-600'>Cash Cash</p>
           </div>
        </div>

      </div>
      <button onClick={() => {
        props.setVehicleFound(true)
        props.setConfirmedRidePanel(false)
      }} className='w-full p-2 mt-5 font-semibold text-white bg-green-600 rounded-lg'>Confirm</button>
    </div>
  )
}

export default ConfirmedRide