import React from "react";
import { Fragment, useState, useEffect, useRef } from "react";
import pic from "../../assets/pic.jpg"
import { Disclosure, Menu, Transition, Dialog } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import "./Navbar.css";
import { AiFillMail } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify'
import { ImHome2 } from "react-icons/im";
import { BiHash } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { AiFillSetting, AiFillApple } from "react-icons/ai";
import { RiLock2Fill } from "react-icons/ri"
import { RiMessage2Fill } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { ImTwitter } from "react-icons/im";
import { css } from "@emotion/react";
import { FadeLoader } from "react-spinners";
import { useSelector } from "react-redux";
import twitter from "../../assets/twitter.png"
import { ExclamationIcon } from '@heroicons/react/outline'

import {
  ArchiveIcon,
  ArrowCircleRightIcon,
  ChevronDownIcon,
  HeartIcon,
  TrashIcon,
  UserAddIcon,
} from "@heroicons/react/solid";
 import InviteFriends from "../../assets/modals/InviteFriends";

const override = css`
  display: block;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  border-color: red;
`;


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



function Navbar() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [sign, setSign] = useState(false)

  const cancelButtonRef = useRef(null)

  const navigate = useNavigate()
  const openmodal = () => setOpen(true);
  const OpenSign = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const profileImage = useSelector((state) => {
    return state.profileImage.profileImage
  })
  useEffect(() => {
    console.log(profileImage)
  })
  const clickHander = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOpen(false)
      setSign(false)
      toast.success("logout success")

    }, 3000)

  }

  const onClickHandler = () => {
    setShowModal(!showModal)
  }
  return (

   
    <div>
    <InviteFriends  showModal={showModal} setShowModal={setShowModal}/>
      <Transition.Root show={sign} onHide={handleClose} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setSign}>
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
                <Dialog.Panel className="relative w-full bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                  <div className="bg-white wa px-4 pt-3 pb-4 sm:p-6 sm:pb-4">
                    <div className="flex justify-center items-center flex-col ">
                      <div className="">
                        <img src={twitter} className="h-10 w-28" />
                      </div>
                      <br />
                      <h1 className="text-xl font-bold">
                        Sign in to Arabic Twitter
                      </h1>
                      <br />
                      <button className="border-2 h-10 w-full sm:w-3/5 rounded-full">
                        <div className="flex">
                          <div className="flex items-center">
                            <div className="ml-1 flex justify-center items-center rounded-full w-6 h-6 border-2 border-none bg-blue-600 text-sm  text-white">I
                            </div>
                          </div>
                          <div className="flex flex-col justify-start">
                            <h1 className="text-sm ml-1 flex font-semibold">Sign in as Ehtisham</h1>
                            <h1 className="text-xs ml-1 flex">ihteshamu11@gmail.com</h1>
                          </div>
                          <div className="flex items-center justify-end ml-4 w-20">
                            <div className="ml-1 flex justify-center items-center  text-3xl"><FcGoogle />
                            </div>
                          </div>
                        </div>
                      </button>
                      <br />
                      <button className="border-2 h-10 w-full sm:w-3/5 flex justify-center items-center rounded-full">
                        <AiFillApple className="text-2xl" />
                        <h1 className="font-semibold ml-1"> Sign in with Apple </h1>
                      </button>
                      <h1 className="mt-2 text-gray-500">
                        _____________ or ______________
                      </h1>
                      <br />
                      <input placeholder=" Phone, email or username" className="ps-2 outline-none border-2 h-14 w-full sm:w-3/5 rounded-lg" />
                      <br />
                      <button className="border-2 h-10 w-full sm:w-3/5 rounded-full bg-purple-600 hover:bg-purple-500 text-white">Next</button>
                      <br />
                      <button className="border-2 h-10 w-full sm:w-3/5 rounded-full hover:bg-slate-300">Forgot Password</button>
                      <br />
                      <h1 className="mr-12 text-sm sm:text-lg ">Don't have an account? <b className="text-sky-400 font-normal hover:border-b-2 hover:border-sky-400" type="button">Sign up</b> </h1>
                      <br />

                    </div>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div>

        {/* <=========== End Existing account modal ==========> */}

        {/* <=========== start Logout modal ==========> */}

        <Transition.Root show={open} onHide={handleClose} as={Fragment}>
          <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="relative inline-block  align-center bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                  <div>



                    <span>

                      <FadeLoader loading={loading} css={override} size={50} />


                    </span>
                    <div className='flex justify-center'>
                      <img src={twitter} className="h-10 w-28" />

                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Log Out of Twitter
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          you can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <div className='flex justify-center items-center bg-black hover:bg-slate-800 text-white rounded-3xl border-2 h-10' onClick={() => navigate("/signup")}>
                      {/* <FcGoogle  className='mr-3 text-2xl'/> */}
                      <a
                        onClick={clickHander}
                        className="flex bg-black w-64 flex justify-center mr-4 ,
                    block px-4 py-2 outline-none text-md"
                      >

                        <h1 className="ml-4"
                          type="button"
                        >Log out</h1>

                      </a>
                    </div>
                    <div className='flex justify-center mt-3 items-center rounded-3xl border-2 h-10' onClick={handleClose}>
                      {/* <AiFillApple  className='mr-3 text-2xl'/> */}
                      <h1>Cancel</h1>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>

      {/* <=========== End Logout modal ==========> */}

      {/* <=========== Start Navbar ==========> */}

      <Disclosure as="nav" className="navbar bg-slate-300 fixed z-10">
        {({ open }) => (
          <>
            <div className="ml-10 w-full">
              <div className="flex  items-center  h-16">

                {/* <=========== Start Navbar Sidemenu dropdown button ==========> */}

                <div className="flex ">
                  <div className="flex justify-start h-10 w-10">
                    <Menu as="div" className="absolute z-10 inline-block text-left ">
                      <div className="ml-4">
                        <Menu.Button className="bg-gray-100 w-10 h-8  rounded-md flex justify-center items-center absolute  text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-100">
                          <span className="sr-only">Open options</span>
                          <DotsVerticalIcon
                            className="h-5 w-5"
                            aria-hidden="true" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">

                        <Menu.Items className=" absolute z-10 ml-10  mt-16 w-56 h-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              <a
                                onClick={() => navigate("/")}
                                className="flex text-gray-900 text-gray-700,
                    block px-4  mt-4 py-2  mt-3 border-b "
                              >
                                <ImHome2 className="mt-1 text-2xl text-gray-700" />
                                <h1 className="ml-4 text-xl cursor-pointer">Home</h1>
                              </a>
                            </Menu.Item>
                            <Menu.Item>
                              <a
                                onClick={() => navigate("/explore")}
                                className="flex text-gray-900 text-gray-700,
                block px-4 py-2 mt-4  border-b "
                              >
                                <BiHash className="mt-1 text-2xl text-gray-700" />
                                <h1 className="ml-4 text-xl cursor-pointer">Explore</h1>
                              </a>
                            </Menu.Item>
                            <Menu.Item>
                              <a
                                onClick={() => navigate("/notification")}
                                className="flex text-gray-900 text-gray-700,
                block px-4 py-2 mt-4  border-b "
                              >
                                <IoMdNotifications className="mt-1 text-2xl text-gray-700" />
                                <h1 className="ml-4 text-xl cursor-pointer">Notification</h1>
                              </a>
                            </Menu.Item>

                            <Menu.Item>
                              <a
                                onClick={() => navigate("/message")}
                                className="flex text-gray-900 text-gray-700,
                block px-4 py-2 mt-4  border-b "
                              >
                                <RiMessage2Fill className="mt-1 text-2xl text-gray-700" />
                                <h1 className="ml-4 text-xl cursor-pointer">Message</h1>
                              </a>
                            </Menu.Item>
                            <Menu.Item>
                              <a
                                onClick={() => navigate("/bookmark")}
                                className="flex text-gray-900 text-gray-700,
                block px-4 py-2 mt-4  border-b "
                              >
                                <BsFillBookmarkFill className="mt-1 text-2xl text-gray-700" />
                                <h1 className="ml-4 text-xl cursor-pointer">Bookmark</h1>
                              </a>
                            </Menu.Item>
                            <Menu.Item>
                              <a
                                onClick={() => navigate("/lists")}
                                className="flex text-gray-900 text-gray-700,
                block px-4 py-2 mt-4  border-b "
                              >
                                <FaClipboardList className="mt-1 text-2xl text-gray-700" />
                                <h1 className="ml-4 text-xl cursor-pointer">List</h1>
                              </a>
                            </Menu.Item>
                            <Menu.Item>
                              <a
                                onClick={() => navigate("/profile")}
                                className="flex text-gray-900 text-gray-700,
                block px-4 py-2 mt-4  border-b "
                              >
                                <FaUserAlt className="mt-1 text-2xl text-gray-700" />
                                <h1 className="ml-4 text-xl cursor-pointer">Profile</h1>
                              </a>
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="hidden sm:block sm:ml-6"></div>
                </div>

                {/* <=========== End Navbar Sidemenu dropdown button ==========> */}

                {/* <=========== Start Navbar Profile dropdown button ==========> */}

                <div className=" flex justify-end w-full ">
                  <div className=" flex items-center justify-end ml-10  ">
                    <div className="text-black flex justify-end w-32">
                      <AiFillMail className="h-6 w-6 " />
                      <BellIcon className="h-6 w-6 ml-4" />
                    </div>

                    <div>
                      <div className="">
                        <Menu
                          as="div"
                          className="text-left w-4"
                        >

                          <div >
                            <Menu.Button className="inline-flex justify-end h-10 w-20 rounded-full py-1 text-sm font-medium text-gray-700 ">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={profileImage && profileImage[(profileImage.length - 1)].profileImage}
                                alt=""
                              />

                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute z-10 right-0 mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none mr-10">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "group flex items-center px-4 py-2 text-sm"
                                      )}
                                    >
                                      <img src={profileImage && profileImage[(profileImage.length - 1)].profileImage}
                                        alt='Oscar Self Portrait'
                                        className="border-4 rounded-full w-12 h-12"
                                        onClick={() => navigate("/profile")}
                                      />
                                      <div
                                        onClick={() => navigate("/profile")}
                                        className="flex flex-col ml-2">
                                        <div className="flex">
                                          <b> Muhammad Nasir</b>
                                          <RiLock2Fill
                                            className="ml-1 h-4 w-5 text-black-400 group-hover:text-gray-500"
                                          />
                                        </div>
                                        @proabdulbasit
                                      </div>
                                    </a>

                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      onClick={onClickHandler}
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "group flex items-center px-4 py-2 text-sm"
                                      )}
                                    >
                                      <div className="ml-5">
                                        Invite Friends
                                      </div>
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "group flex items-center px-4 py-2 text-sm"
                                      )}
                                    >
                                      <div className="ml-5">
                                        Add an existing account
                                      </div>
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "group flex items-center px-4 py-2 text-sm"
                                      )}
                                    >
                                      <AiFillSetting
                                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                      />
                                      Setting
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="py-1">
                                <Menu.Item>
                                  <a
                                    onClick={openmodal}
                                    type="button"
                                    className="flex text-gray-400 group-hover:text-gray-500 text-gray-700,
                    block px-4 py-2 text-md"
                                  >
                                    <BiLogOut className="mt-1" />
                                    <h1 className="ml-4">Sign out</h1>
                                  </a>
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    <div className="flex items-center px-5">
                      <div className="">
                        {/* <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        
                        /> */}
                      </div>
                      <div className="ml-2">
                        {/* <div className="text-base font-medium text-black">Tom Cook</div> */}
                        {/* <div className="text-sm font-medium text-gray-400">tom@example.com</div> */}
                      </div>
                    </div>
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-slate-300 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          {/* <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        /> */}
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>


                            <a href="./logout">
                              Sign out
                            </a>

                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>

                {/* <=========== End Navbar Profile dropdown button ==========> */}


              </div>
            </div>
          </>
        )}
      </Disclosure>
      {/* <=========== End Navbar==========> */}

    </div>
  );
}

export default Navbar;
