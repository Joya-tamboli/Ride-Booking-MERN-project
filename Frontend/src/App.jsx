import React, { useContext } from "react";

import { Routes, Route } from "react-router-dom";

import UserLogin from "./pages/Userlogin";
import UserSignup from "./pages/UserSignup";
import Captainlogin from "./pages/Captainlogin";
import Captainsignup from "./pages/CaptainSignup";
import { UserDataContext } from "./context/userContext";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectedWrapper";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";
import 'remixicon/fonts/remixicon.css';


const App = () => {
    
  const ans = useContext(UserDataContext);
 


  return (
    <div style={{ height: '100vh' }}>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="captain-riding" element={<CaptainRiding />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captainlogin" element={<Captainlogin />} />
        <Route path="/captainsignup" element={<Captainsignup />} />
        <Route path="/home" element={
         < UserProtectedWrapper>
            <Home />
         </UserProtectedWrapper>
        } />
    
        <Route path="/user/logout" element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />
        <Route path="/captainhome" element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        } />

      </Routes>
    </div>
   
  );
};

export default App;
