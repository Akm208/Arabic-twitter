import React, { Fragment, useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"
import profile from "../../assets/pics.jpg"
import pics from "../../assets/pic.jpg"
import pic1 from "../../assets/Akmal.jpg"
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'

import { Dialog, Transition } from '@headlessui/react'
import WalletModal from '../../assets/modals/Wallet'

function Profile() {
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const location = useLocation();
  console.log("profileState", location.state)
  const profileImage = useSelector((state) => {
    return state.profileImage.profileImage
  })

  const OpenModal = () => {
    setOpen(!open)
  }
  const showWalletModal = ()=>{
    setOpenModal(!openModal)
  }
  return (
    <div>
    <WalletModal openModal={openModal} setOpenModal={setOpenModal} />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                  <div>
                  
                  <div className="mt-1 sm:mt-5">
                
                  <div className="mt-1">
                    <button className='btn btn-primary'>Change Profile Photo</button>
                  </div>
                </div>
                  <div className="mt-1 sm:mt-5">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Name
                  </Dialog.Title>
                  <div className="mt-1">
                    <input type='text' className='w-80 h-8 border' placeholder='Enter your Name'></input>
                  </div>
                </div>
                <div className="mt-2  sm:mt-5">
                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                  Bio
                </Dialog.Title>
                <div className="mt-1">
                  <textarea className='border w-80'>Enter Your Bio</textarea>
                </div>
              </div>
              <div className="mt-2  sm:mt-5">
              <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                Location
              </Dialog.Title>
              <div className="mt-1">
                <textarea className='border w-80'>Enter Your Location</textarea>
              </div>
            </div>
                   
                  </div>
                  <div className="mt-2 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    // onClick={() => setOpen(false)}
                    >
                      Update Profile
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Go back to Profile
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div class="fixed bg-indigo-800  w-full  ">
        <div class="absolute inset-0  ">
          <img class="w-full h-full object-cover  " src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="" />
          <div class="absolute inset-0  mix-blend-multiply" aria-hidden="true"></div>
          <div className='bg-slate-400 space-x-8 py-2 text-center'>
            <button className='  hover:bg-slate-700 rounded-full hover:text-white p-2'>Tweets & Replies</button>
            <button className=' hover:bg-slate-700 rounded-full hover:text-white p-2'>Tweets</button>
            <button className=' hover:bg-slate-700  rounded-full hover:text-white p-2'>Media</button>
            <button className='text-white bg-slate-700 rounded-full px-3 p-2 '>Following</button>
            <button className=' hover:bg-slate-700   rounded-full hover:text-white p-2' onClick={OpenModal}>Edit Profile</button>
            
            <button onClick={showWalletModal} className=' hover:bg-slate-700 rounded-full hover:text-white p-2'>Wallet</button>

          </div>
          <div className=" 2xl:w-auto ml-3 md:ml-4  hidden md:block h-screen md:w-auto">
            <div className=" 2xl:w-auto mr-2 -mt-28 ml-12   md:w-56 md:text-sm h-full rounded-xl dark:scrollbar-thumb-slate-100 dark:scrollbar-track-slate-100  ">
              <div className="2xl:w-auto rounded-xl  bg-slate-300">
                <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full rounded-xl" />
                <div className="flex justify-center -mt-8">
                  <img
                    src={profileImage && profileImage[(profileImage.length - 1)].profileImage}
                    className="rounded-full border-solid h-24 w-24 border-black border-2 -mt-3"
                  />
                </div>
                <div className="text-center px-3 pb-6 pt-2">
                  <h className="text-black text-2xl bold font-sans">{location.state ? (location.state) : ("Muhammad Nasir")}</h>


                  <p className="mt-2 font-sans font-light text-black">
                    BrainsPK Manager Amir khan
                  </p>
                </div>
                <hr className="border-y-1 border-gray-500" />
                <br />
                <div className="flex justify-center  pb-3 text-black">
                  <div className="text-center mr-3 border-r pr-3">
                    <h2>6,664</h2>
                    <span>Following</span>
                  </div>
                  <div className="text-center">
                    <h2>9,991</h2>
                    <span>Followers</span>
                  </div>
                </div>
                <hr className="border-y-1 border-gray-500" />
                <div className="text-center py-6 text-cyan-600">
                  <h1 className="text-bold"> My Profile</h1>
                </div>
              </div>
              <br />


            </div>

          </div>
        </div>
        <div class="relative max-w-7xl  mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">

        </div>
      </div>
    </div>
  )
}

export default Profile
