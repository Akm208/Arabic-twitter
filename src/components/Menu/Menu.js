import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import picone from "../assest/download.jpg"
import pictwo from "../assest/pic.jpg"
function Menu() {
    return (
        <div className="ml-10 mt-3 w-96 sm:hidden ">
            <div className="pt-2 relative mx-auto text-gray-600  ... ">
                <input className="border-2 bg-slate-200 h-10 px-5 w-80  mr-4 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" />
                <button type="submit" className="absolute right-0 top-0 mt-5 pr-4 mr-4">
                    <BiSearchAlt2 />
                </button>
            </div>
            <div className="flex flex-col bg-gray-200 mt-6 rounded-lg mr-4 ">
                <h1 className="text-xl font-bold pl-3">Trends for you</h1>
                <div className="mt-5 pl-3">
                    <span >Trending in Pakistan</span>
                    <h1 className="text-xl font-bold">#ShahbazSharif</h1>
                    <span>10.6K Tweets</span>
                </div>
                <div className="mt-5 pl-3">
                    <span>Politics-Tranding</span>
                    <h1 className="text-xl font-bold">#surprise</h1>
                    <span>124K Tweets</span>
                </div>
                <div className="mt-5 pl-3">
                    <span>Politics-Tranding</span>
                    <h1 className="text-xl font-bold">#President</h1>
                    <span>64K Tweets</span>
                </div>
                <div className="mt-5 pl-3">
                    <span>Politics-Tranding</span>
                    <h1 className="text-xl font-bold">#NoConfidenceMotion</h1>
                    <span>64K Tweets</span>
                </div>
                <div className="mt-5 pl-3">
                    <span>Politics-Tranding</span>
                    <h1 className="text-xl font-bold">#Pasawa</h1>
                    <span>64K Tweets</span>
                </div>
                <div className="mt-5 pl-3">
                    <span>Sports-Tranding</span>
                    <h1 className="text-xl font-bold">#wining</h1>
                    <span>57K Tweets</span>
                </div>
                <div className="mt-5 pl-3">
                    <span>Funny-Tranding</span>
                    <h1 className="text-xl font-bold">#Da Ba Ase Gap E</h1>
                    <span>57K Tweets</span>
                    <p className="text-blue-500 text-xl mt-5 pl-3">Show More</p>
                </div>
                <div className="mt-9 ">
                    <h1 className="text-xl font-bold pl-3">Who to follow</h1>
                    <div className="flex ml-4">
                        <img className="w-10 mt-5 rounded-full" src={picone} alt="" />
                        <div>
                            <h1 className="text-xl mt-3 ml-3 font-bold">M Saqib</h1>
                            <span className="ml-3">@saqib</span>
                        </div>
                        <button className="bottom-2 bg-black text-white ml-3 rounded-full w-20 h-6 mt-6">Follow</button>
                    </div>
                    <div className="mt-5 pl-3">
                        <span>Politics-Tranding</span>
                        <h1 className="text-xl font-bold">#surprise</h1>
                        <span>124K Tweets</span>
                    </div>
                    <div className="mt-5 pl-3">
                        <span>Politics-Tranding</span>
                        <h1 className="text-xl font-bold">#President</h1>
                        <span>64K Tweets</span>
                    </div>
                    <div className="mt-5 pl-3">
                        <span>Politics-Tranding</span>
                        <h1 className="text-xl font-bold">#NoConfidenceMotion</h1>
                        <span>64K Tweets</span>
                    </div>
                    <div className="mt-5 pl-3">
                        <span>Politics-Tranding</span>
                        <h1 className="text-xl font-bold">#Pasawa</h1>
                        <span>64K Tweets</span>
                    </div>
                    <div className="mt-5 pl-3">
                        <span>Sports-Tranding</span>
                        <h1 className="text-xl font-bold">#wining</h1>
                        <span>57K Tweets</span>
                    </div>
                    <div className="mt-5 pl-3">
                        <span>Funny-Tranding</span>
                        <h1 className="text-xl font-bold">#Da Ba Ase Gap E</h1>
                        <span>57K Tweets</span>
                        <p className="text-blue-500 text-xl mt-5 pl-3">Show More</p>
                        {/* d.s ld mmag paowj */}
                    </div>
                    <div className="mt-9 ">
                        <h1 className="text-xl font-bold pl-3">Who to follow</h1>
                        <div className="flex ml-4">
                            <img className="w-10 mt-5 rounded-full" src={picone} alt="" />
                            {/* akljrnlknwk */}
                            <div>
                                <h1 className="text-xl mt-3 ml-3 font-bold">M Saqib</h1>
                                <span className="ml-3">@saqib</span>
                            </div>
                            <button className="bottom-2 bg-black text-white ml-3 rounded-full w-20 h-6 mt-6">Follow</button>
                        </div>
                        <div className="flex ml-4">
                            <img className="w-10 mt-5 rounded-full" src={pictwo} alt="" />
                            <div>
                                <h1 className="text-xl mt-3 ml-3 font-bold">User Id</h1>
                                <span className="ml-3">@user</span>
                            </div>
                            <button className="bottom-2 bg-black text-white ml-3 rounded-full w-20 h-6 mt-6">Follow</button>
                        </div>
                        <div className="flex ml-4">
                            <img className="w-10 mt-5 rounded-full" src={picone} alt="" />
                            <div>
                                <h1 className="text-xl mt-3 ml-3 font-bold">User two</h1>
                                <span className="ml-3">@usertwo</span>
                            </div>
                            <button className="bottom-2 bg-black text-white ml-3 rounded-full w-20 h-6 mt-6 ">Follow</button>
                        </div>
                        <span className=" ml-6 ">see more</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Menu




