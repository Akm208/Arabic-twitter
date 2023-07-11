
import React, { useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { ImTwitter } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { auth } from '../FirebaseConfig/FirebaseConfig'
import twitter from "../../assets/twitter.png"
toast.configure();
const SignIn = () => {

  const navigate = useNavigate()

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const login = async () => {
    // let history = useHistory();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      console.log(user);
      if (user.user.email) {
        toast.success("login success")
        navigate("/feeds")
      }
    } catch (error) {
      console.log(error.message);
      toast.error("register first")

    }
  };


  const notifyy = () => toast.success("sefuhreuio")

  const logout = async () => {

    await signOut(auth);

  };


  return (
    <div className='flex w-screen h-screen items-center justify-center '>
      <br />

      <div className="h-auto w-80 md:w-96 md:h96 border-2 rounded-2xl flex flex-col justify-center ml-4 mr-4 mt-24 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className='flex mt-4 justify-center'>
            {/* <ImTwitter className='text-4xl text-sky-500' /> */}
            <img src={twitter} className="h-8 w-14" />
          </div>
          <h2 className="mt-2 text-center text-2xl text-purple-500 font-extrabold">Sign in to Twitter</h2>
          <br />
        </div>

        <div className="">
          <div className=" mt-2 px-4 sm:rounded-lg sm:px-10">
            <div className="space-y-6">
              <div>
                {/* <label for="email" className="block text-sm font-medium text-gray-700"> Email address </label> */}
                <div className="mt-1">
                  <input id="email" name="email" type="email" autocomplete="email" placeholder='Email Address' required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-3xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(event) => { setLoginEmail(event.target.value) }} />
                </div>
              </div>

              <div>
                {/* <label for="password" className="block text-sm font-medium text-gray-700"> Password </label> */}
                <div className="mt-1">
                  <input id="password" name="password" type="password" autocomplete="current-password" placeholder='Password' required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-3xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }} />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" onChange={(event) => { setLoginPassword(event.target.value) }} />
                  <label for="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                </div>
              </div>
              {/* <div className='flex justify-center items-center rounded-3xl border-2 h-10'>
            <FcGoogle  className='mr-3 text-2xl'/>
            <h1>Sign in With Gmail</h1>
          </div>
          <div className='flex justify-center items-center rounded-3xl border-2 h-10'>
            <AiFillApple  className='mr-3 text-2xl'/>
            <h1>Sign in With Apple</h1>
          </div> */}

              <div>
                <button onClick={() => {
                  login()
                }} class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Sign in</button>
              </div>
              {/* <button onClick={notifyy}>clickjlsdfnsjkfnksr</button> */}

            </div>
            <div className="text-sm flex mt-4">
              <h1> Dont have an account? </h1>
              <a onClick={() => navigate("/signup")} className="font-medium text-sky-600 hover:text-sky-400 ml-1"> Sign Up </a>
            </div>
            <div className="mt-6">
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>


                </div>

                {/* <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button> */}

              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}

export default SignIn