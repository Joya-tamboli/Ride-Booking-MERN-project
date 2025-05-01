import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
         <h5
        className='absolute top-0 w-full p-1 text-center'
        onClick={() => props.setRidePopUpPanel(false)}
      >
        <i className='text-3xl text-black ri-arrow-down-wide-line'></i>
      </h5>
      <h3 className='mb-3 text-2xl font-semibold'>New Ride Available</h3>
    
    <div className='flex items-center justify-between p-3 mt-4 bg-yellow-300 rounded-lg bg-gray-50'>
        <div className='flex items-center gap-3 '>
            <img className='object-cover rounded-full w-13 h-13 ' src="https://miro.medium.com/v2/resize:fit:1400/1*LPPpUZLved9uY_9gvRgRlw.jpeg" alt="" />
            <h2 className='text-xl font-medium'>Riya Singh</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 km</h5>
    </div>
     
    
    
    <div className='flex flex-col items-center justify-between '>
     
     
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
       props.setConfirmRidePopUpPanel(true)
      }} className='w-full p-2 mt-5 font-semibold text-white bg-green-600 rounded-lg'>Accept</button>

      <button onClick={() => {
       props.setRidePopUpPanel(false)
      }} className='w-full p-2 mt-4 font-semibold text-gray-700 bg-gray-300 rounded-lg'>Ignore</button>
    </div>
    </div>
  )
}

export default RidePopUp