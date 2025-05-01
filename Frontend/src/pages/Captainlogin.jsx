import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

function Captainlogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const captain ={
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/captains/login`, captain)

    if (response.status === 200) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captainhome')
    }
    
   
    setEmail('')
    setPassword('')
  }



  return (
    <div className='flex flex-col justify-between h-screen p-7'>
     <div>
     <img className='w-20 mb-2 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
     <form onSubmit={(e) => submitHandler(e)} >
        <h3 className='mb-2 text-lg font-medium'>What's your email? </h3>
        <input
        required
         value={email}
          onChange={(e) => setEmail(e.target.value)}
         type="email"
         placeholder='email@example.com' className='w-full px-4 py-2 text-lg bg-[#eeeeee] mb-7 border placeholder:text-base' />
        <h3  className='mb-2 text-lg font-medium'>Enter the password</h3>
        <input 
        required 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='********' className='w-full px-4 py-2 text-lg bg-[#eeeeee] mb-7 border placeholder:text-base' />
        <button className='w-full px-4 py-2 text-lg text-white font-semibold bg-[#111] mb-7  placeholder:text-base'>Login</button>
        <p className='text-center'>Join a fleet? <Link to='/captainsignup' className='text-blue-600'>Register as a Captain</Link></p>
     </form>
     </div>
     <div>
       <Link to='/login' className=' bg-orange-400 flex items-center justify-center w-full px-4 py-2 text-lg text-white font-semibold bg-[#111] mb-5  placeholder:text-base'>Sign in as User</Link>
       
     </div>
    </div>
    
  )
}

export default Captainlogin