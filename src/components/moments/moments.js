import React from 'react'
import { TiArrowLeft } from "react-icons/ti";
import { BsLightningCharge } from "react-icons/bs";


function moments() {
  return (
    <div className='h-screen flex  border-r-2 gap-24'>
        
    <div className='w-auto border-r-2 h-full'>
        <div className='mt-5 ml-5 flex'>
            <TiArrowLeft className='text-4xl'/>
            <h1 className='text-2xl font-bold'>Moments</h1>
            <BsLightningCharge className='text-2xl ml-60'/>
        
        </div>

        <div className=''>
            <h1 className='text-4xl w-96 font-bold mt-8 ml-12'>You haven’t created any Moments</h1>
            <p className='text-lg ml-12'>When you do, it’ll show up here.</p>
        </div>
        </div>


        <div className='w-auto flex justify-center items-end flex-col mr-4 mt-28'>
        <div className=''>
            <h1 className='text-4xl w-96 font-bold mt-8 ml-12 mr-5'>Nothing to see here — yet</h1>
            <p className='text-lg ml-12'>Choose an existing Moment, or create a new one.</p>
            <button className='bg-sky-400 mt-6 ml-5 h-12 w-36 rounded-full text-white font-bold text-lg' >create new</button>
        </div>
        </div>
        <div className='ml-24'></div>
    </div>
  )
}

export default moments