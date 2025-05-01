import React from 'react';
import { Link } from 'react-router-dom';
import CaptainDetail from '../components/CaptainDetail';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

function CaptainHome() {

  const [RidePopUpPanel, setRidePopUpPanel] = React.useState(true);
  const [ConformRidePopUpPanel, setConformRidePopUpPanel] = React.useState(false);
  const RidePopUpPanelRef = React.useRef(null);
  const ConfirmRidePopUpPanelRef = React.useRef(null);


  useGSAP(() => {
    gsap.to(RidePopUpPanelRef.current, {
      transform: RidePopUpPanel ? 'translateY(0%)' : 'translateY(100%)',
      duration: 0.4,
      ease: 'power2.inOut',
    });
  }, [RidePopUpPanel]);

  useGSAP(() => {
    gsap.to(ConfirmRidePopUpPanelRef.current, {
      transform:ConformRidePopUpPanel ? 'translateY(0%)' : 'translateY(100%)',
      duration: 0.4,
      ease: 'power2.inOut',
    });
  }, [ConformRidePopUpPanel]);


  return (
    <div className='h-screen'>
     <div className='fixed top-0 flex items-center justify-between w-screen p-3 '>
       <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt=" " />
       <Link to='/home'  className='flex items-center justify-center w-10 h-10 bg-white rounded-full '>
               <i className='text-lg font-medium ri-logout-box-r-line'></i>
       </Link>
     </div>
        <div className='h-3/5'>
        <img
          className='object-cover w-full h-full'
          src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'
          alt='Background'
        />
        </div>
        <div className='p-6 h-2/5'>
          <CaptainDetail />
        </div>
        <div>
        <div
          ref={RidePopUpPanelRef}
          className='fixed bottom-0 z-10 w-full px-3 py-10 translate-y-full bg-white pt-14'>
            <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConformRidePopUpPanel} />
           
        </div>
        <div
          ref={ConfirmRidePopUpPanelRef}
          className='fixed bottom-0 z-10 w-full h-screen px-3 py-10 translate-y-full bg-white pt-14'>
            <ConfirmRidePopUp setConfirmRidePopUpPanel={setConformRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
           
        </div>
      </div>
    </div>
  );
}

export default CaptainHome;
