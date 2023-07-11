import React, { Component, useState } from 'react'
import Profile from '../components/profile/Profile'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../components/Homepage/Homepage'
import Notification from '../components/Notification/Notification'
import Lists from "../components/lists/Lists"
import Bookmark from "../components/bookmark/Bookmark"
import Message from "../components/Messages/Message"
import Feeds from '../components/feed/Feeds'
import SignIn from './../components/signIn/SignIn'
import { useNavigate } from 'react-router-dom'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../components/FirebaseConfig/FirebaseConfig'
import SignUp from './../components/signUp/SignUp'
// import Logout from '../components/Logout/Logout'
import { ToastContainer, toast } from 'react-toastify'


function Router() {

  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);
  const [result, setResult] = useState("")
  const navigate = useNavigate();


  async function setUpRecaptcha(number) {
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth)
    recaptchaVerifier.render();
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, number, recaptchaVerifier);
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      setResult(confirmationResult);
      toast.error("OTP send successful")

    } catch (error) {
      console.log(error);
    }
  }
  function signouttheuser() {
    localStorage.clear();
    navigate('/signup')

  }



  return (
    <div>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/message" element={<Message />} />
        <Route path="/bookmark " element={<Bookmark />} />
        
        <Route path="/signup" element={<SignUp
          number={number}
          setNumber={setNumber}
          error={error}
          setError={setError}
          otp={otp}
          setOtp={setOtp}
          flag={flag}
          setFlag={setFlag}
          setUpRecaptcha={setUpRecaptcha}
          result={result}
          setResult={setResult}
        // toast={toast}
        />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Feeds />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <></>
      </Routes>
    </div>
  )
}
export default Router
