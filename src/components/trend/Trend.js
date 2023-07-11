import React, { useEffect, useState } from 'react'
import { AiOutlineSetting } from "react-icons/ai";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsEmojiFrown } from "react-icons/bs";
import { useSelector, connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../redux/actions/usersActions';
import { useNavigate } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Trend({ getUsers, users, usersLoading }) {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()
  console.log("usersState", users, usersLoading)
  const navigate = useNavigate()
  useEffect(() => {
    if (users === null && usersLoading) getUsers()

  })

  if (users !== null) {
    console.log("userData", users)
  }
  const usersProfiles = users?.filter(user=> user.name?.toLowerCase().includes(value.toLowerCase()))
  const clickHandler=(id)=>{
    navigate("/profile", {state:id})
  }
  return (
    <div className=' flex justify-end w-screen mt-20 '>

      {/* <div className='col-8 w-96 border-4 border-blue-700'></div> */}
      <div className=" flex justify-end  mt-2 md:w-72 sm:w-60  lg:w-72  hidden sm:block mr-6 fixed">
        <div class="flex justify-center   ">
          <input type="text" onChange={(e) => setValue(e.target.value)} class="px-4 py-2 w-96 bg-slate-100 h-10 rounded-2xl " placeholder="Search..." />


        </div>
        {value.length > 0 && (


          <ul role="list" class="divide-y divide-gray-200">
            {usersProfiles && usersProfiles.map((user)=>(

            <li onClick={()=>clickHandler(user.name)}  class=" cursor-pointer py-4">
              {user.name && user.name}
            </li>
            ))}

          </ul>
        )}
        <div className=" mt-2  bg-slate-100 rounded-lg text-black w-80 sm:w-56 md:w-72 lg:w-72  md:text-sm pl-6 pt-3">

          <div className="  mt-1 pt-1 flex ">

            <div className='col-6 '>
              <h1 className="flex">Trends for you</h1>
            </div>
            <div className='col-6 flex justify-center mb-2 ml-10'>
              <AiOutlineSetting className="" />
            </div>
          </div>
          <hr />
          <br />
          <p className='text-xs'>TRENDING IN INDONESIA</p>
          <div className="mt-4 flex mb-2  ">
            <div className='col-6 '>
              <h1>#Minions</h1>
              <h4 className='text-xs'>9.7 k Tweets</h4>
            </div>
            <div className='col-6 flex justify-center'>
              <Menu as="div" className="relative inline-block text-left ml-20">
                <div>
                  <Menu.Button className=" flex items-center justify-center rounded-full h-7 w-7 text-sm font-medium text-gray-700 hover:bg-sky-100 focus:outline-none ">
                    <HiOutlineDotsHorizontal className="" />

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
                  <Menu.Items className="origin-top-right absolute right-0 sm:w-56 md:w-64  h-24 flex justify-center items-center rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="py-1">
                      <Menu.Item className="flex justify-start gap-4  mt-2">

                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm sm:text-xs'
                            )}
                          >
                            <BsEmojiFrown className="h-5 w-5 sm:h-4 sm:w-4 " />
                            Not interested in this
                          </a>
                        )}

                      </Menu.Item>
                      <Menu.Item className="flex justify-start gap-4 mt-3">
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm sm:text-xs'
                            )}
                          >
                            <BsEmojiFrown className="h-5 w-5 sm:h-4 sm:w-4" />
                            This trend is harmful or spammy
                          </a>
                        )}
                      </Menu.Item>

                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <hr />
          <div className="mt-4 flex mb-2">
            <div className='col-6'>
              <h1>#SeninBarokha</h1>
              <p className='text-xs'>8.72 k Tweets</p>
            </div>
            <div className='col-6 flex justify-center'>
              <Menu as="div" className="relative inline-block text-left ml-20 ">
                <div>
                  <Menu.Button className=" flex items-center justify-center rounded-full h-7 w-7 text-sm font-medium text-gray-700 hover:bg-sky-100 focus:outline-none ">
                    <HiOutlineDotsHorizontal className="" />

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
                  <Menu.Items className="origin-top-right absolute right-0 w-72 h-24 flex justify-center items-center rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="py-1">
                      <Menu.Item className="flex justify-start gap-4 mt-2">

                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm sm:text-xs'
                            )}
                          >
                            <BsEmojiFrown className="h-5 w-5 sm:h-4 sm:w-4" />
                            Not interested in this
                          </a>
                        )}

                      </Menu.Item>
                      <Menu.Item className="flex justify-start gap-4 mt-3">
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm sm:text-xs'
                            )}
                          >
                            <BsEmojiFrown className="h-5 w-5 sm:h-4 sm:w-4" />
                            This trend is harmful or spammy
                          </a>
                        )}
                      </Menu.Item>

                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div>


            <hr />
          </div>
          <p className='text-xs mt-2'>FOOTBALL . TRENDING</p>
          <div className="mt-2 mb-2 flex">
            <div className='col-6'>
              <h1>#MUFC</h1>
              <p className='text-xs'>9.72kTweets</p>
            </div>
            <div className='col-6 flex justify-center'>
              <Menu as="div" className="relative inline-block text-left ml-20">
                <div>
                  <Menu.Button className=" flex items-center justify-center rounded-full h-7 w-7 text-sm font-medium text-gray-700 hover:bg-sky-100 focus:outline-none ">
                    <HiOutlineDotsHorizontal className="" />

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
                  <Menu.Items className="origin-top-right absolute right-0  w-72 h-24 flex justify-center items-center rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="py-1">
                      <Menu.Item className="flex justify-start gap-4 mt-2">

                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm sm:text-xs'
                            )}
                          >
                            <BsEmojiFrown className="h-5 w-5 sm:h-4 sm:w-4" />
                            Not interested in this
                          </a>
                        )}

                      </Menu.Item>
                      <Menu.Item className="flex justify-start gap-4 mt-3">
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm sm:text-xs'
                            )}
                          >
                            <BsEmojiFrown className="h-5 w-5 sm:h-4 sm:w-4" />
                            This trend is harmful or spammy
                          </a>
                        )}
                      </Menu.Item>

                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <hr />
          <div className="mt-4 mb-2 flex ">
            <div className='col-6'>
              <h1 >#Rangnick</h1>
              <p className='text-xs'>8.72kTweets</p>
            </div>
            <div className='col-6 flex justify-center'>
              <Menu as="div" className="relative inline-block text-left ml-20">
                <div>
                  <Menu.Button className=" flex items-center justify-center rounded-full h-7 w-7 text-sm font-medium text-gray-700 hover:bg-sky-100 focus:outline-none ">
                    <HiOutlineDotsHorizontal className="" />

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
                  <Menu.Items className="origin-top-right absolute right-0  w-72 h-24 flex justify-center items-center rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="py-1">
                      <Menu.Item className="flex justify-start gap-4 mt-2">

                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm sm:text-xs'
                            )}
                          >
                            <BsEmojiFrown className="h-5 w-5 sm:h-4 sm:w-4" />
                            Not interested in this
                          </a>
                        )}

                      </Menu.Item>
                      <Menu.Item className="flex justify-start gap-4 mt-3">
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm sm:text-xs'
                            )}
                          >
                            <BsEmojiFrown className="h-5 w-5 sm:h-4 sm:w-4" />
                            This trend is harmful or spammy
                          </a>
                        )}
                      </Menu.Item>

                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <hr />
          <div className="mt-4 mb-2 flex ">
            <div className='col-6'>
              <h1>#ThxOle</h1>
              <p className='text-xs'>8.4kTweets</p>
            </div>
            <div className='col-6 flex justify-center'>
              <Menu as="div" className="relative inline-block text-left ml-20">
                <div>
                  <Menu.Button className=" flex items-center justify-center rounded-full h-7 w-7 text-sm font-medium text-gray-700 hover:bg-sky-100 focus:outline-none ">
                    <HiOutlineDotsHorizontal className="" />

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
                  <Menu.Items className="origin-top-right absolute right-0  w-72 h-24 flex justify-center items-center rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="py-1">
                      <Menu.Item className="flex justify-start gap-4 mt-2">

                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm sm:text-xs'
                            )}
                          >
                            <BsEmojiFrown className="h-5 w-5 sm:h-4 sm:w-4" />
                            Not interested in this
                          </a>
                        )}

                      </Menu.Item>
                      <Menu.Item className="flex justify-start gap-4 mt-3">
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm sm:text-xs'
                            )}
                          >
                            <BsEmojiFrown className="h-5 w-5 sm:h-4 sm:w-4" />
                            This trend is harmful or spammy
                          </a>
                        )}
                      </Menu.Item>

                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <hr />
          <br />

          <span className="text-blue-800">Show more</span>
          <br />
          <br />
        </div>
      </div>
    </div>

  )
}
const mapStateToProps = (state) => ({
  users: state.userData.users,
  usersLoading: state.userData.usersLoading
})
export default connect(mapStateToProps, { getUsers })(Trend)