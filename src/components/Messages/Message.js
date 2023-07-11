import React, { useState } from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import { AiOutlineMessage } from 'react-icons/ai'
import { Modal, Button } from "react-bootstrap";
import SideBar from '../SideBar/SideBar';
import Trend from '../trend/Trend';

function Message(props) {

  // new nested messages in modal

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <SideBar />
    <Trend />
    <div className=' flex justify-start lg:justify-center'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-outline mb-4">
            <input type="text" name="name" placeholder="Search friend"
              className="w-100 py-2 border-b-2 border-gray-600 outline-none focus:border-green-400" />
          </div>
        </Modal.Body>
      </Modal>
      <div className='mt-2 flex  w-screen sm:w-2/4 md:w-3/5 lg:w-5/12 lg:mr-8 border-2 h-auto mx-30'>
        <div className=' flex w-2/4 border-r-2 '>
          <div className='w-auto text-center  '>
            <h1 className='font-extrabold mt-3 text-3xl'>Welcome to your <br /> inbox !</h1>
            <p>Drop a line, share Tweets and more with private <br /> conversations between you and others on <br />
              Twitter. </p>
          <br />

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
              onClick={handleShow}
            >
              New Message
            </button>
          <br />
          <br />
          <br />
          </div>
        </div>
        <div className='w-100  text-center  mt-20'>
          <h1 className=' font-bold text-4xl '>Select a Message</h1>
          <p>Choose from your existing conversations, start a <br /> new one, or just keep swimming.</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
            onClick={handleShow}
          >
            New Message
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Message