import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div>
      <div className=' bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex flex-col justify-between w-full h-screen pt-8 bg-red-400'>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
        <div className='px-4 py-4 bg-white pb-7'>
          <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
          <Link to='/login' className='flex items-center justify-center w-full py-3 mt-5 text-white bg-black rounded '>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start