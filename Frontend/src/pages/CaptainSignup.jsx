import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CaptainSignup() {

    const navigate = useNavigate()
 
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [userData , setUserData] = React.useState([])

    const [ vehicleColor, setVehicleColor ] = useState('')
    const [ vehiclePlate, setVehiclePlate ] = useState('')
    const [ vehicleCapacity, setVehicleCapacity ] = useState('')
    const [ vehicleType, setVehicleType ] = useState('')
  


    const {captain , setCaptain} = React.useContext(CaptainDataContext);
  
    const submitHandler = async (e) => {
      e.preventDefault()
      const captainData = {
        fullname: {
          firstname: firstName,
          lastname: lastName
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType
        }
      }

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/captains/register`, captainData)
      
      if (response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captainhome')
      }
      
  
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
      
    }
  return (
    <div className='flex flex-col justify-between h-screen p-7'>
    <div>
    <img className='w-16 mb-10 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
    <form onSubmit={(e) => submitHandler(e)} >
       

    <h3 className='mb-2 text-lg font-medium'>What's Captain name? </h3>
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


       <h3 className='mb-2 text-base font-medium'>What's captain email? </h3>
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

       <h3 className='mb-2 text-lg font-medium'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>




       <button className='w-full px-4 py-2 text-lg text-white font-semibold bg-[#111] mb-7  placeholder:text-base'>Create an account</button>
       <p className='text-center'>Already have a account? <Link to='/captainlogin' className='text-blue-600'>Login here!</Link></p>
    </form>
    </div>
    <div>
      <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and Terms of Servive apply.</p>
    </div>
   </div>
  )
}

export default CaptainSignup