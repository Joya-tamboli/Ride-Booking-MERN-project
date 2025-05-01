import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Userlogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData , setUserData] = useState([])


  const {user , setUser} = useContext(UserDataContext);
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setPassword('')
  }



  return (
    <div className='flex flex-col justify-between h-screen p-7'>
     <div>
     <img className='w-16 mb-10 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
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
        <p className='text-center'>New Here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
     </form>
     </div>
     <div>
       <Link to='/captainlogin' className=' bg-green-600 flex items-center justify-center w-full px-4 py-2 text-lg text-white font-semibold bg-[#111] mb-5  placeholder:text-base'>Sign in as Driver</Link>
       
     </div>
    </div>
  )
}

export default Userlogin