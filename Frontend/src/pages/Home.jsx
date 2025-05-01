import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSerachPanel from '../components/LocationSerachPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import axios from 'axios';


const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const ConfirmPanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [ConfirmedRidePanel , setConfirmedRidePanel] = useState(false)
  const [vehicleFound , setVehicleFound] = useState(false)
  const [waitingForDriver , setWaitingForDriver] = useState(false)
  const [ pickupSuggestions, setPickupSuggestions ] = useState([])
  const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
  const [activeField, setActiveField] = useState(null);
  const [fare , setFare] = useState({});


  const handlePickupChange = async (e) => {
    setPickup(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
        setPickupSuggestions(response.data)
    } catch {
        // handle error
    }
}

const handleDestinationChange = async (e) => {
    setDestination(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setDestinationSuggestions(response.data)
    } catch {
        // handle error
    }
}


      


  const submitHandler = (e) => {
    e.preventDefault();
  };

  // Animate search panel
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24,
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
        duration: 0.4,
        ease: 'power2.in',
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [panelOpen]);

  // Animate vehicle panel
  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanelOpen ? 'translateY(0%)' : 'translateY(100%)',
      duration: 0.4,
      ease: 'power2.inOut',
    });
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    gsap.to(ConfirmPanelRef.current, {
      transform: ConfirmedRidePanel ? 'translateY(0%)' : 'translateY(100%)',
      duration: 0.4,
      ease: 'power2.inOut',
    });
  }, [ConfirmedRidePanel]);

  useGSAP(() => {
    gsap.to(vehicleFoundRef.current, {
      transform: vehicleFound ? 'translateY(0%)' : 'translateY(100%)',
      duration: 0.4,
      ease: 'power2.inOut',
    });
  }, [vehicleFound]);

  useGSAP(() => {
    gsap.to(waitingForDriverRef.current, {
      transform: waitingForDriver ? 'translateY(0%)' : 'translateY(100%)',
      duration: 0.4,
      ease: 'power2.inOut',
    });
  }, [waitingForDriver]);

  async function findTrip(){
    
    setVehiclePanelOpen(true)
    setPanelOpen(false)

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/ride/get-fare`, {
      params: { pickup, destination },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    console.log(response.data)
  }
  
  

  return (
    <div className='relative h-screen overflow-hidden'>
      <img
        className='absolute w-16 left-5 top-5'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png'
        alt='Logo'
      />

      <div className='w-screen h-screen'>
        <img
          className='object-cover w-full h-full'
          src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'
          alt='Background'
        />
      </div>

      {/* Search panel */}
      <div className='absolute top-0 flex flex-col justify-end w-full h-screen'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className='absolute text-2xl transition-opacity opacity-0 cursor-pointer right-6 top-6'
          >
            <i className='ri-arrow-down-wide-line'></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a Trip</h4>
          <form onSubmit={submitHandler}>
            <div className='absolute w-1 h-16 top-[45%] left-10 bg-gray-900 rounded-full'></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
              type='text'
              placeholder='Add a pick-up location'
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3'
              type='text'
              placeholder='Enter your Destination'
            />
          </form>
          <button
          onClick={findTrip}
          className='w-full py-3 mt-5 text-white bg-black rounded-lg'>
            Find Trip
          </button>
        </div>

        <div
          ref={panelRef}
          className='h-0 overflow-hidden bg-[#eee] transition-all duration-500'
        >
          <LocationSerachPanel
                  suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                  setPanelOpen={setPanelOpen}
                  setVehiclePanelOpen={setVehiclePanelOpen}
                  setPickup={setPickup}
                  setDestination={setDestination}
                  activeField={activeField}
/>


        </div>
      </div>

      {/* Vehicle Panel */}
      <div>
        <div
          ref={vehiclePanelRef}
          className='fixed bottom-0 z-10 w-full px-3 py-10 bg-white pt-14'
          style={{ transform: 'translateY(100%)' }}
        >
          <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
      </div>
      <div>
        <div
          ref={ConfirmPanelRef}
          className='fixed bottom-0 z-10 w-full px-3 py-10 bg-white pt-14'
          style={{ transform: 'translateY(100%)' }}
        >
          <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound} />
          
        </div>
      </div>
      <div>
        <div
         ref={vehicleFoundRef}
          className='fixed bottom-0 z-10 w-full px-3 py-10 bg-white pt-14'
          style={{ transform: 'translateY(100%)' }}
        >
          <LookingForDriver setVehicleFound={setVehicleFound}/>
          
        </div>
      </div>
      <div>
      <div
         ref={waitingForDriverRef}
          className='fixed bottom-0 z-10 w-full px-3 py-10 bg-white pt-14'
          style={{ transform: 'translateY(100%)' }}
        >
          <WaitingForDriver waitingForDriver={waitingForDriver}/>
          
        </div>
      </div>
    </div>
  );
  }

export default Home;
