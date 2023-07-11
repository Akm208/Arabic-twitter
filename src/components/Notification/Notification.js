import React, { useState } from 'react'
import { RiSettings2Line } from "react-icons/ri";
import All from '../Notification/All'
import Mentions from '../Notification/Mentions'
import SideBar from "../SideBar/SideBar"
import Trend from "../trend/Trend"

const tabs = [
    { name: 'All', href: 'all', current: false },
    { name: 'Mentions', href: '', current: true },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Notification() {
    const [activeTab, setActiveTab] = useState("");
    return (
        <>
        <SideBar />
        <Trend />
        <div className='w-screen mt-2 flex justify-center sm:justify-start h-screen lg:justify-center '>
        <div className='w-screen sm:w-3/5 md:w-3/5 lg:w-5/12 lg:mr-16 xl:w-2/4 xl:ml-16 min-h-full border-2'>
            <div className=''>
            <div className='flex justify-end'>
                <div className='flex justify-end mt-2 w-10 h-10 font-medium text-2xl mr-2'><RiSettings2Line /></div>
                </div>
                <div>
                <h1 className='text-2xl font-bold ml-3 '>Notifications </h1>
                </div>
            </div>
            <div>
                <div className="">
                    <label htmlFor="tabs" className="sr-only w-7">
                        Select a tab
                    </label>
                    <select
                        id="tabs"
                        name="tabs"
                        className="block w-2/4 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        defaultValue={tabs.find((tab) => tab.current).name}
                        onChange={() => { }}
                    >
                        {tabs.map((tab) => (
                            <option className='w-1/4' key={tab.name}>{tab.name}</option>
                        ))}
                    </select>
                </div>
                <div className="hidden sm:block">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            {tabs.map((tab) => (
                                <span
                                    key={tab.name}
                                    // href={tab.href}
                                    onClick={() => { setActiveTab(tab.name) }}
                                    className={classNames(
                                        tab.current
                                            ? 'border--500 text--600'
                                            : 'border-transparent text--500 hover:text-blue-700 hover:border-blue-500 w-60 font-bold text-xl',
                                        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm hover:text-blue-700 hover:border-blue-500 hover:bg-slate-300 w-60 flex justify-center font-bold text-xl'
                                    )}
                                    aria-current={tab.current ? 'page' : undefined}
                                >
                                    {tab.name}
                                </span>
                            ))}
                        </nav>
                    </div>
                </div>
                
                {activeTab == "Mentions" ? <div>   <Mentions />
                </div> : <div><All /> </div>}
            </div>
            </div>
        </div>
        </>
    )
}

export default Notification