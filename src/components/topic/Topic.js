import React from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai"
import { AiFillMessage } from 'react-icons/ai'

const Topic = () => {
   return (
      <div className='flex  justify-center'>
         <div>
            <div className='flex'>
               <button className='px-6'><AiOutlineArrowLeft /></button>
               <h1 className='px-12 font-bold'>Topic</h1>
            </div>
            <div className='flex gap-60 py-10'>
               <h1 className='font-bold px-24'>Followed</h1>
               <h1 className='font-bold'>Not Intersted</h1>
            </div>
            <div>
               <p className='px-12'>The Topics you follow are used to personalize the Tweets, events, and ads that you <br /> see, and show up publicly on your profile</p>
            </div>
            <div className='flex px-12 py-9 hover:bg-gray-100'>
               <button className='text-cyan-600  '><AiFillMessage className='w-8 h-12 ' /></button>
               <h1 className='font-bold'>Accounting<br /><p>Business & finance</p></h1>

               <button className='bg-blue-700 text-white w-28 rounded-full  ml-96'>Following</button>

            </div>

            <div className='flex px-12 py-9 hover:bg-gray-100'>
               <button className='text-cyan-600'><AiFillMessage className='w-8 h-12' /></button>
               <h1 className='font-bold'>Accounting<br /><p>Business & finance</p></h1>
               <button className='bg-blue-700 text-white w-28 rounded-full  ml-96'>Following</button>

            </div>
            <div className='flex px-12 py-9 hover:bg-gray-100'>
               <button className='text-cyan-600'><AiFillMessage className='w-8 h-12' /></button>
               <h1 className='font-bold'>Accounting<br /><p>Business & finance</p></h1>
               <button className='bg-blue-700 text-white w-28 rounded-full  ml-96'>Following</button>

            </div>
            <div className='flex px-12 py-9 hover:bg-gray-100'>
               <button className='text-cyan-600'><AiFillMessage className='w-8 h-12' /></button>
               <h1 className='font-bold'>Accounting<br /><p>Business & finance</p></h1>
               <button className='bg-blue-700 text-white w-28 rounded-full  ml-96'>Following</button>

            </div>
            <div className='flex px-12 py-9 hover:bg-gray-100'>
               <button className='text-cyan-600'><AiFillMessage className='w-8 h-12' /></button>
               <h1 className='font-bold'>Accounting<br /><p>Business & finance</p></h1>
               <button className='bg-blue-700 text-white w-28 rounded-full  ml-96'>Following</button>

            </div>

         </div>
      </div>
   )
}

export default Topic