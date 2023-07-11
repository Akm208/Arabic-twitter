import React,{useState, useEffect} from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineGif } from "react-icons/ai";
import { RiBuilding2Line } from "react-icons/ri";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
// import {db} from '../../firebase-config';
import {db} from "../FirebaseConfig/FirebaseConfig"
import {addDoc,collection,doc,getDocs} from 'firebase/firestore'

function HomePage() {
    const [post, setPost] = useState("")
    // const [data, setdata] = useState([])
    const submitForm = async (e) => {
        e.preventDefault();
        const collec = collection(db, "postData");
        const payload = { post };
        const data = await addDoc(collec, payload);
        console.log(data);
        setPost("");
      
      };

    return (
        <div className="flex justify-center mt-10 sm:justify-start lg:justify-center top-0 h-auto w-screen">
            
            <div className="ml-5 mt-5 w-80  flex-col md:w-auto justify-center sm:w-80 bg-slate-100 ">
                <div className="mt-5">

                </div>
                <form onSubmit={submitForm}>
                <div className="flex ml-2">
                    <FaUser className="h-12 w-12 rounded-3xl bg-gray-300 p-1.5 mt-4" />
                    <input
                        className="h-7 mt-6 ml-4 mr-3 w-96 outline-none"
                        type="text"
                        placeholder="Whats happening?"
                        value={post} 
                        onChange={(e) => setPost(e.target.value)}
                    />
                </div>{" "}
                <br />
                <div className="flex">
                    <AiOutlineGif className="ml-14 h-6 w-6 text-teal-500	" />
                    <RiBuilding2Line className="ml-5 h-6 w-6 text-teal-500	" />
                    <HiOutlineEmojiHappy className="ml-5 h-6 w-6 text-teal-500	" />
                    <MdDateRange className="ml-5 h-6 w-6 text-teal-500	" />
                    <GrLocation className="	ml-5 h-6 w-6 text-emerald-400	" />
                    <div><button  className="bg-blue-500 text-white rounded-3xl w-14 ml-11">click me</button></div>
                </div>{" "}
                </form>
                <br />
                <hr />
             
            </div>
        </div>
    );
}

export default HomePage;
