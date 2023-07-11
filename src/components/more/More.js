import React,{useState} from 'react'
import {HiOutlineChatAlt} from "react-icons/hi"
import {BsLightningCharge} from "react-icons/bs"
import {BiNews} from "react-icons/bi"
import {IoRocketOutline,IoSettingsOutline,IoHelpCircleOutline} from "react-icons/io5"
import {GrAid} from "react-icons/gr"
import {DiGoogleAnalytics} from "react-icons/di"
import {ImPinterest2} from "react-icons/im"
import {RiKeyboardLine} from 'react-icons/ri'
function More() {
  const [showModal, setShowModal] = useState(true);
  const clickHandler =  ()=>{
    
  }
  return (
      <div>
   
      {showModal ? (
        <>
          <div className=" overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-6 w-72 ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-8 w-6 text-xl block bg-gray-400 py-0  ml-9 pt-0 rounded-full">
                      ×
                    </span>
                  </button>
                </div>
                <div> 
        <div  className='flex gap-4 ml-2'>
          <HiOutlineChatAlt  className='mt-2 ' /> 
         <a href='topic'>Topics</a>

           </div>
    <div className='flex  gap-4 mt-4 ml-2' >
        <BsLightningCharge  className='mt-2'/>
       <a href='moments'>Moments</a>
    </div>
    <div className='flex  gap-4 mt-4 ml-2' >
        <BiNews  className='mt-2'/>
        <h6 className=' cursor-pointer'>Newsletters</h6>
    </div>  
    <div className='flex  gap-4 mt-4 ml-2' >
        <IoRocketOutline className='mt-2'/>
      
       <h6 className='cursor-pointer'> Twitter for  professional</h6>
    </div>                                                                                                                                       
        
    <div className='flex  gap-4 mt-4 ml-2' >
        <GrAid className='mt-2'/>
       <h6 className=' cursor-pointer'>Twitter Aids</h6>
    </div>
    <div className='flex gap-4 mt-4 ml-2' >
        <DiGoogleAnalytics className='mt-2'/>     
        <h6 className=' cursor-pointer'>Analytics</h6>
    </div>
         
    <div className='flex gap-4 mt-4 ml-2' >
        <IoSettingsOutline className='mt-2'/>  
       <h6 className='cursor-pointer'> Setting and privacy</h6>
    </div>
    <div className='flex gap-4 mt-4 ml-2' >
        <IoHelpCircleOutline className='mt-2 '/>
        <h6 className='cursor-pointer'> Help Center</h6>
    </div>
         
    <div className='flex  gap-4 mt-4 ml-2' >
        <ImPinterest2 className='mt-2'/>
        <h6 className='cursor-pointer'> Display</h6>
    </div>
        
    <div className='flex gap-4 mt-4 ml-2' >
        <RiKeyboardLine className='mt-2'/>
        <h6 className='cursor-pointer'> Keyboards Shortcuts</h6>
    </div>
        <br />
    </div>
               
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default More