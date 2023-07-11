import React from 'react'
import { FaClipboardList } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";
import logo from "../../assets/twitter.png";
import SideBar from '../SideBar/SideBar';
import Trend from '../trend/Trend';

function Lists() {
    return (
        <>
            <SideBar />
            <Trend />
        <div className='flex justify-center sm:justify-start lg:justify-center w-screen ml-0 mt-2'>
            <div className='container-list mt-0 w-screen sm:w-3/5 sm:ml-0 lg:w-5/12 xl:w-2/4 xl:ml-4 border-2 '>
                <div className='row1 flex  bg-slate-50 w-full'>
                    <div className='col-2 flex justify-center items-center'>
                        <BiArrowBack />
                    </div>
                    <div className='col-8'>
                        <h1 className='text-lg font-bold'>List</h1>
                        <p>@Ehtisham23124</p>
                    </div>
                    <div className='col-2 flex gap-3 justify-center items-center'>
                        <FaClipboardList />
                        <HiOutlineDotsHorizontal className="" />

                    </div>
                </div>
                <div className='row2 mt-12 ml-4'>
                    <h1 className='text-xl font-bold'>Pinned Lists</h1>
                    <br />
                    <p className='ml-3'>Nothing to see here yet — pin your favorite Lists to access them quickly. </p>
                    <br />
                </div>
                <hr/>
                <div className=''>
                    <div>
                        <h4 className='text-2xl font-bold font-sans ml-4'>Discover new Lists</h4>
                    </div>
                    <div className='row ml-1 mr-1 mt-4 hover:bg-slate-300 w-auto'>
                        <div className='col-2'>
                            <img src={logo} className=" mt-1 h-10 w-10 md:h-14 md:w-14  ml-4 rounded-xl bg-sky-300 " />
                        </div>
                    </div>
                    <div className='row2 mt-12 ml-4'>
                        <h1 className='text-xl font-bold'>Pinned Lists</h1>
                        <br />
                        <p className='ml-3'>Nothing to see here yet — pin your favorite Lists to access them quickly. </p>
                        <br />
                    </div>
                    <hr />
                    <div className=''>
                        <div>
                            <h4 className='text-2xl font-bold font-sans ml-4'>Discover new Lists</h4>
                        </div>
                        <div className='row ml-1 mr-1 mt-4 hover:bg-slate-300 w-auto'>
                            <div className='col-2'>
                                <img src={logo} className=" mt-1 h-10 w-10 md:h-14 md:w-14  ml-4 rounded-xl bg-sky-300 " />
                            </div>
                            <div className='col-6'>
                                <div>
                                    <p className='font-semibold md:font-bold md:text-base'>Pakistan Official</p>
                                </div>
                                <div className='flex w-48 md:w-60'>
                                    <img src={logo} className=" w-6 h-6 md:h-8 md:w-8 rounded-full bg-sky-300 " />
                                    <p className=' font-semibold text-xs md:font-bold md:text-sm mt-1 '>Pakistan Official</p>
                                    <p className=' text-xs md:text-sm mt-1 md:mt-2'>@ihtesham</p>
                                </div>
                            </div>
                            <div className='col-3 flex justify-center items-center'>
                                <button className="h-8 w-36 ml-2 bg-purple-500  rounded-lg ">
                                    <h1 className="text-sm text-white">Follow</h1>
                                </button>
                            </div>
                        </div>

                        <div className='row ml-1 mr-1 mt-4 hover:bg-slate-300 w'>
                            <div className='col-2'>
                                <img src={logo} className=" mt-1 h-10 w-10 md:h-14 md:w-14  ml-4 rounded-xl bg-sky-300 " />
                            </div>
                            <div className='col-6'>
                                <div>
                                    <p className='font-semibold md:font-bold md:text-base'>Pakistan Official</p>
                                </div>
                                <div className='flex w-48 md:w-60'>
                                    <img src={logo} className=" w-6 h-6 md:h-8 md:w-8 rounded-full bg-sky-300 " />
                                    <p className=' font-semibold text-xs md:font-bold md:text-sm mt-1 '>Pakistan Official</p>
                                    <p className=' text-xs md:text-sm mt-1 md:mt-2'>@ihtesham</p>
                                </div>
                            </div>
                            <div className='col-3 flex justify-center items-center'>
                                <button className="h-8 w-36 ml-2 bg-purple-500  rounded-lg ">
                                    <h1 className="text-sm text-white">Follow</h1>
                                </button>
                            </div>
                        </div>

                        <div className='row ml-1 mr-1 mt-4 hover:bg-slate-300'>
                            <div className='col-2'>
                                <img src={logo} className=" mt-1 h-10 w-10 md:h-14 md:w-14  ml-4 rounded-xl bg-sky-300 " />
                            </div>
                            <div className='col-6'>
                                <div>
                                    <p className='font-semibold md:font-bold md:text-base'>Pakistan Official</p>
                                </div>
                                <div className='flex w-48 md:w-60'>
                                    <img src={logo} className=" w-6 h-6 md:h-8 md:w-8 rounded-full bg-sky-300 " />
                                    <p className=' font-semibold text-xs md:font-bold md:text-sm mt-1 '>Pakistan Official</p>
                                    <p className=' text-xs md:text-sm mt-1 md:mt-2'>@ihtesham</p>
                                </div>
                            </div>
                            <div className='col-3 flex justify-center items-center'>
                                <button className="h-8 w-36 ml-2 bg-purple-500  rounded-lg ">
                                    <h1 className="text-sm text-white">Follow</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                   
                    <div className='row ml-1 mr-1 mt-4 hover:bg-slate-300'>
                        <div className='col-2'>
                            <img src={logo} className=" mt-1 h-10 w-10 md:h-14 md:w-14  ml-4 rounded-xl bg-sky-300 " />
                        </div>
                        <div className='col-6'>
                            <div>
                                <p className='font-semibold md:font-bold md:text-base'>Pakistan Official</p>
                            </div>
                            <div className='flex w-48 md:w-60'>
                                <img src={logo} className=" w-6 h-6 md:h-8 md:w-8 rounded-full bg-sky-300 " />
                                <p className=' font-semibold text-xs md:font-bold md:text-sm mt-1 '>Pakistan Official</p>
                                <p className=' text-xs md:text-sm mt-1 md:mt-2'>@ihtesham</p>
                            </div>
                        </div>
                        <div className='col-3 flex justify-center items-center'>
                            <button className="h-8 w-36 ml-2 bg-purple-500  rounded-lg ">
                                <h1 className="text-sm text-white">Follow</h1>
                            </button>
                        </div>
                    </div>
                    <div className='row ml-1 mr-1 mt-4 hover:bg-slate-300'>
                        <div className='col-2'>
                            <img src={logo} className=" mt-1 h-10 w-10 md:h-14 md:w-14  ml-4 rounded-xl bg-sky-300 " />
                        </div>
                        <div className='col-6'>
                            <div>
                                <p className='font-semibold md:font-bold md:text-base'>Pakistan Official</p>
                            </div>
                            <div className='flex w-48 md:w-60'>
                                <img src={logo} className=" w-6 h-6 md:h-8 md:w-8 rounded-full bg-sky-300 " />
                                <p className=' font-semibold text-xs md:font-bold md:text-sm mt-1 '>Pakistan Official</p>
                                <p className=' text-xs md:text-sm mt-1 md:mt-2'>@ihtesham</p>
                            </div>
                        </div>
                        <div className='col-3 flex justify-center items-center'>
                            <button className="h-8 w-36 ml-2 bg-purple-500  rounded-lg ">
                                <h1 className="text-sm text-white">Follow</h1>
                            </button>
                        </div>
                    </div>
                    <div className='row ml-1 mr-1 mt-4 hover:bg-slate-300'>
                        <div className='col-2'>
                            <img src={logo} className=" mt-1 h-10 w-10 md:h-14 md:w-14  ml-4 rounded-xl bg-sky-300 " />
                        </div>
                        <div className='col-6'>
                            <div>
                                <p className='font-semibold md:font-bold md:text-base'>Pakistan Official</p>
                            </div>
                            <div className='flex w-48 md:w-60'>
                                <img src={logo} className=" w-6 h-6 md:h-8 md:w-8 rounded-full bg-sky-300 " />
                                <p className=' font-semibold text-xs md:font-bold md:text-sm mt-1 '>Pakistan Official</p>
                                <p className=' text-xs md:text-sm mt-1 md:mt-2'>@ihtesham</p>
                            </div>
                        </div>
                        <div className='col-3 flex justify-center items-center'>
                            <button className="h-8 w-36 ml-2 bg-purple-500  rounded-lg ">
                                <h1 className="text-sm text-white">Follow</h1>
                            </button>
                        </div>
                    </div>

                    <div className='row'>
                        <h1 className='mt-4 ml-6 text-sky-400'>Show more</h1>
                    </div>
                    <br />
                    <hr />
                    <div className='row2 mt-12 ml-4'>
                    <h1 className='text-xl font-bold'>Your Lists</h1>
                    <br />
                    <p className='ml-3'>You haven't created or followed any Lists. When you do, they'll show up here. </p>
                    <br />
                </div>
                    <br />
                    <br />
                </div>
            </div>
        </div>
        </>
    )
}

export default Lists