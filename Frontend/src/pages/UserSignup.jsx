import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/userContext'

function UserSignup() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [userData , setUserData] = React.useState([])

  const navigate = useNavigate()

  const {user , setUser} = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault()
     const newUser ={
       fullname:{
         firstname: firstName,
         lastname: lastName
    },
    email: email,
    password: password
  }

  const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/register`, newUser)


  if(response.status === 201){
    const data = response.data
    setUser(data.user)
    localStorage.setItem('token', data.token)
    navigate('/home')
  
    }

    

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
 }

  return (
    <div className='flex flex-col justify-between h-screen p-7'>
     <div>
     <img className='w-16 mb-10 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
     <form onSubmit={(e) => submitHandler(e)} >
        

     <h3 className='mb-2 text-lg font-medium'>What's your name? </h3>
     <div className='flex gap-4 mb-5 '>
     <input
        required
         
         type="text"
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)}
         placeholder='firstname' className='w-1/2 px-4 py-2 text-base bg-[#eeeeee]  border placeholder:text-sm' />
      <input
        required
         
         type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
         placeholder='lastname' className='w-1/2 px-4 py-2 text-base bg-[#eeeeee] border placeholder:text-sm' />

     </div>


        <h3 className='mb-2 text-base font-medium'>What's your email? </h3>
        <input
        required
         
         type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         placeholder='email@example.com' className='w-full px-4 py-2 text-lg bg-[#eeeeee] mb-5 border placeholder:text-sm' />
        <h3  className='mb-2 text-base font-medium'>Enter the password</h3>
        <input 
        required 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='********' className='w-full px-4 py-2 text-lg bg-[#eeeeee] mb-5 border placeholder:text-sm' />
        <button className='w-full px-4 py-2 text-lg text-white font-semibold bg-[#111] mb-7  placeholder:text-base'>Create an Account</button>
        <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here!</Link></p>
     </form>
     </div>
     <div>
       <p className='text-[10px] leading-tight'>By proceeding , you consent to get calls , Whatapps , or SMS messeage , including by automated means , from Uber and its affiliates to the number provided.</p>
     </div>
    </div>
  )
}

export default UserSignup  