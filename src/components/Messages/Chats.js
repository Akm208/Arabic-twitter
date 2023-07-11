import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import { FiSettings } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import User from '../../assets/user.jpg'
function Chat(props) {

    return (
        <>
            <div className='flex h-screen w-screen mt-20'>
                <div>
                    <div className='flex justify-between  border-2 w-96'>
                        <div className=''>
                            <h1>Messages</h1>
                        </div>
                        <div>
                            <FiSettings />
                        </div>
                    </div>
                    <div>
                        <input type="text" name="name" placeholder="Search friend"
                            className="w-100 py-2 border-b-2 border-gray-600 outline-none focus:border-green-400" />
                    </div>
                </div>
                <div className='text-black w-full border-2'>
                    <h1 className='text-right'>Right side div</h1>
                </div>
            </div>

        </>
    )
}

export default Chat