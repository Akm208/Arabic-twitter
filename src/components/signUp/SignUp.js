import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig/FirebaseConfig";
import { ImTwitter } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PhoneInput from "react-phone-number-input";
import twitter from "../../assets/twitter.png"
// import ClipLoader from "react-spinners/ClipLoader";
// import { MoonLoader } from 'react-spinners';
import { FadeLoader } from 'react-spinners';
import { css } from "@emotion/react";

toast.configure();

const override = css`

  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  border-color: black;
  color : red
  
`;
const SignUp = ({ number, setNumber, error, setError, setUpRecaptcha, otp, setOtp, flag, setFlag, result, setResult }) => {
  const navigate = useNavigate()
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setregisterPassword] = useState("");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  //   loading && <ClipLoader  
  //   size={150}
  //   color={"#123abc"}
  //   loading={setLoading}
  // />




  // const register = async (event) => {

  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword
  //     );
  //     console.log(user);
  //     navigate("/signin")

  //   } catch (error) {
  //     console.log(error.message);

  //   }
  // };



  const getOtp = async (e) => {
    e.preventDefault();

    setError("");
    if (number === "" || number === undefined)
      return setError('please enter a valid phone number');
    // toast.success("login success")

    try {
      const response = await setUpRecaptcha(number);
      console.log(response);
      // setResult(response);
      setFlag(true);

    }
    catch (err) {
      toast.error("login failed")
      setError(err.message);
    }

  }
  const verifyOtp = async (e) => {
    console.log(otp)
    e.preventDefault();
    if (otp === "" || otp === null) {
      toast.warning("Input field must not be empty");
      return;
    }
    else if (otp.length !== 6) {
      toast.warning("OTP must be 6 digits long");
      return;
    }
    result.confirm(otp).then(res => {
      navigate("/");
      toast.success("login success")
      console.log("res ", res);
    }).catch(e =>
      toast.error("Enter correct OTP"),
      console.error(e))
    // toast.success("login failed")
    // try {
    //   await result.confirm(otp);
    //   console.log("otp : ", otp)
    // navigate("/cabdrivers");  
    // }
    // catch (err) {
    //   setError(err.message)
    //   console.log("err : ", error)
    // }

  }
  //   <>
  //   {
  //  loading?

  //  <ClipLoader color={color} loading={loading} css={override} size={150} />
  //  :

  //   }
  //   </>




  return (

    <div className="bg-grey-lighter min-h-screen flex flex-col w-screen bg-pink ">

      {
        loading ?
          <FadeLoader loading={loading} css={override} margin={35} height={25}
          />
          :

          <div className="container flex-1 flex flex-col items-center  w-80 h-auto md:w-96  h-80 justify-center  ">
            <div className="bg-white rounded shadow-md text-black border-2 w-72 md:w-80 ">
              <div className="flex justify-center mt-4">
                {/* <ImTwitter className='text-4xl text-sky-500' /> */}
                <img src={twitter} className="h-8 w-14" />

              </div>
              <h1 className=" mt-2 text-2xl font-bold flex text-purple-500 justify-center ">Create Your Account</h1>

              {/* <input
            type="email"
            className="block border border-grey-light w-60 ml-6 mt-3 h-10 md:w-80 outline-none rounded-lg"
            name="email"
            placeholder="  Email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          /> */}
              <div style={{ display: !flag ? "block" : "none" }}>
                <div className="flex justify-center ml-6">
                  <PhoneInput
                    defaultCountry="PK"
                    value={number}
                    className=" w-10 mr-64 py-3"
                    placeholder="Enter your phone Number  :"
                    onChange={setNumber}
                  />
                </div>

                <br />
                <div className="flex justify-center">
                  <button
                    className="w-32 h-12 flex justify-center items-center text-center py-3 rounded-full bg-green bg-purple-600 text-white font-bold hover:bg-purple-500 focus:outline-none my-1 "
                    onClick={getOtp}
                  >
                    {/* {loading ? "loading ...": */}

                    <h6> Send OTP</h6>

                  </button>
                </div>
              </div>



              <div style={{ display: flag ? "block" : "none" }}>
                <br />
                <div className='flex justify-center'><h5>Enter OTP Sent To You By SMS</h5></div>

                <div className=" d-flex justify-content-center mt-4">
                  <input
                    className="textfield-in-signup"
                    type="number"
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder=" Your OTP :" />
                </div>

                <br />
                <div className="flex justify-center">
                  <button

                    className="text btn btn-primary btn-in-signup " onClick={verifyOtp}>

                    <h6>verifyOtp</h6>
                  </button>
                </div>
              </div>

              <div id="recaptcha-container"></div>

              {/* <input
            type="password"
            className="block border border-grey-light w-60 ml-6 mt-3 h-10 md:w-80  outline-none rounded-lg"
            name="password"
            placeholder="  Password"
            onChange={(event) => {
              setregisterPassword(event.target.value);
            }}
          />
            <div className="flex justify-center mt-3">
              <h1>Date of Birth</h1>
            </div>
            <div className="mt-4 flex justify-center">
              
<input className="border-2 h-10 w-16"
  type="number"  placeholder="Year" />
  <input className="border-2 h-10 w-16 ml-2"
  type=""  placeholder="Month" />
  <input className="border-2 h-10 w-16 ml-2"
  type=""  placeholder="Day" />
            </div>
<br />  
<div className="flex justify-center">
          <button
            onClick={SignUp}
            type="submit"
            className="w-32 h-12 flex justify-center items-center text-center py-3 rounded bg-green bg-purple-600 text-white font-bold hover:bg-purple-700 focus:outline-none my-1"
          >

            Create Account
          </button>
          </div>
        
        <div className="text-grey-dark ml-3 mt-6">
          Already have an account?
          <a
            className="no-underline border-b border-blue text-blue"
            href="../login"
          >
            Log in
          </a>
          .
        </div> */}


              <br />
            </div>

          </div>
      }
    </div>
  );
};

export default SignUp;
