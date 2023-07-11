import React, { useState, useEffect, Fragment, Component } from "react";
import Picker from 'emoji-picker-react';
import LikeBtn from "../../components/LikeBtn/Like";
import Retweet from "../Retweet/Retweet";
import Comment from "../Comment/Comment";
import pic from "../../assets/Akmal.jpg";
import { BiShareAlt, BiLike } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiOutlineGif, AiOutlineRetweet } from "react-icons/ai";
import { RiBuilding2Line } from "react-icons/ri";
import { WiStars } from "react-icons/wi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { MdDateRange, MdImage } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai"
import { BsStars } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { BsThreeDots, BsArrowLeftRight } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin4Line } from "react-icons/ri"
import { db } from "./../FirebaseConfig/FirebaseConfig";
import { addDoc, collection, doc, query, getDocs, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore'
import { auth } from "./../FirebaseConfig/FirebaseConfig"
// import { Navigate } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineMessage,
} from "react-icons/ai";
import { MdVerified, MdCloudUpload, MdPhotoCameraBack } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { FaFileImage } from "react-icons/fa";
import pic1 from "../../assets/brainspk.jpg";
import profile from "../../assets/pic.jpg";
import { SiSimpleanalytics } from "react-icons/si";
import { FaRegEdit } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { HiOutlineDotsHorizontal, HiLocationMarker } from "react-icons/hi";
import { Disclosure, Menu, Transition, Dialog } from "@headlessui/react";
import "./Feeds.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "../FirebaseConfig/FirebaseConfig"
import { v4 } from "uuid"
import SideBar from "../SideBar/SideBar";
import Trend from "../trend/Trend";
import { writePost, getPost, updatePost } from "../../api";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { getpost, deletePost } from '../../redux/actions/postActions';
// import navigate from 'react-router-dom'
import { useNavigate } from "react-router-dom";
// import { getProfileImage } from './../../api/index';
import Deletealert from "../../assets/common/DeleteAlert";
import { toast } from "react-toastify";

const Feed = ({ getpost, posts, postLoading }) => {
  const [post, setPost] = useState("")
  const [fileUrl, setFileUrl] = useState(null)
  const [showModal, setShowModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [showModalll, setShowModalll] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [show, setShow] = useState(false)
  const [fileType, setFileType] = useState()
  const [deleteId, setDeleteId] = useState()
  const [loading, setLoading] = useState(false)
  const [updateData, setUpdateData] = useState();
  const [editDescription, setEditDescription] = useState("");
  let navigate = useNavigate()
  // const dispatch = useDispatch()
  console.log("feedsStates", posts, postLoading)
  useEffect(() => {

    if (posts === null && postLoading) getpost()
  })
  const postData = posts

  const dispatch = useDispatch()
  console.log("postsDATA", posts)
  const submitForm = (e) => {
    e.preventDefault();
    console.log(post)
    console.log("fileUrl", fileUrl)
    writePost({ post: post, date: Date.now(), fileUrl, fileType }).then(res => {
      getpost();
    }).catch(e => {

    })
  }

  console.log(fileUrl);
  const uploadFile = (file) => {
    setLoading(true)
    console.log(file)
    const type = file.type.split("/")
    setFileType(type[0])

    if (file == null) return;
    const imageRef = ref(storage, `images/${file.name + v4()}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileUrl(url);
      });
      setLoading(false)
      console.log(fileUrl)
    });
  };
  const hanldeChange = (event) => {
    const file = event.target.files[0];
    uploadFile(file);
    uploadFile(event.target.files[0])
  }

  const deletePostMethod = (doc) => {
    console.log("deleteId from delete function", doc)
    dispatch(deletePost(doc));
    getpost();
    setShow(false)
  }

  const profileImage = useSelector((state) => {
    return state.profileImage.profileImage
  })
  const deleteHandler = (id) => {
    setDeleteId(id)
    setShow(!show)
    // setShow(false)
  }
  const handleChange = (event) => {

    uploadFile(event.target.files[0])
  }
  const editHanlder = (obj) => {
    // console.log("editHandler", id)
    setUpdateData(obj)
    setEditModal(!editModal)
    console.log({ ...postData, post: obj.post })
  }
  const editPostHandler = (updateData) => {
    console.log("getpost", postData)
    const userData = { post: "hello" };
    console.log(userData)
    updatePost(updateData._id, { post: editDescription }).then(res => {
      console.log("res : ", res);
      getpost();
    }).catch(e => { console.error("err ", e) })
    setEditModal(!editModal)
  }
  const onUpdateHandler = (doc, e) => {
    let text = e.target.value;
    console.table("doc  ", doc);
    console.table("doc  id ", updateData._id);
    console.table("text :  ", text);
    setEditDescription(text);
  }


  const [inputStr, setInputStr] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setInputStr(prevInput => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };


  return (
    <>

      <SideBar />
      <Trend />
      {/* <=====main container-fluid====> */}
      <div className="main-feeds h-auto border-black border-2 w-auto">

        {/* <=====main container====> */}
        <div className=" flex w-auto h-auto justify-center sm:justify-start lg:justify-center dark:text-gray-100 ">

          {/* <=====main Feed====> */}
          <div className="w-screen 2xl:w-1/2 xl:w-1/2 lg:w-2/5 lg:mr-10 xl:mr-1 md:w-3/5 sm:w-3/5 border-2 mt-2 rounded-t-lg">

            {/* <=====top feed====> */}
            <div className="mr-3 flex-col justify-center bg-slate-100  w-full border-b-2 rounded-t-lg ">
              <div className="">

              </div>
              <form onSubmit={(e) => submitForm(e)}>
                <div className="flex ">
                  <div className="flex w-full justify-between" >
                    <div className="col-2 ml-3 font-bold text-2xl ">Home</div>
                    {/* <div className=" flex justify-end	text-3xl mt-2"><BsStars /> </div> */}
                    <div> <BsStars className="ml-2 h-10 w-10 mt-2 md:h-8 md:w-8 text-slate-900 cursor-pointer" onClick={() => setModalShow(true)} /></div>
                    {modalShow ? (
                      <>
                        <div className="flex justify-center gap-4 mt-12 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  ">
                          <div className="relative  my-6 mt-4 ml-14 w-80 h-32 sm:w-96 sm:mr-72 md:w-96 md:mr-96 lg:mr-0 lg:ml-10 xl:w-96 xl:ml-72">
                            <div className="rounded-lg shadow-lg relative mt-3 h-40 flex flex-col max-w-3xl bg-white outline-none focus:outline-none">
                              <div className=" flex justify-center">
                                <div className="col-11 mt-2 text-4xl flex justify-center text-gray-700">
                                  <WiStars />

                                </div>



                                <div className="col-1"><button
                                  className=""
                                  type="button"
                                  onClick={() => setModalShow(false)}
                                >
                                  <h3 className="mt-3 text-md font-bold font-red text-gray-700"> X </h3>
                                </button></div>
                                <br /></div>
                              <div className="text-md font-bold flex justify-start ml-4 text-gray-900 font-sans">Home Shows You Top Tweets First</div>

                              <div className="flex flex-col justify-center p-2 border-t border-solid border-blueGray-200 rounded-b">
                                <div className="flex">
                                  <div className="col-1 text-sm text-gray-900 ml-2"><BsArrowLeftRight /></div>
                                  <div className="col-11">
                                    <p className="text-gray-900 font-bold text-sm ml-2"> See latest tweets instead </p>
                                    <p className="text-sm text-slate-700 ml-2"> You'll see Tweets up as they happen.</p>
                                  </div>
                                </div>
                                <div className="flex mt-1">
                                  <div className="col-1 text-sm text-gray-900 mt-1 ml-2"><FiSettings /></div>
                                  <div className="col-11">
                                    <p className="font-bold ms-2 text-sm text-gray-900"> View contact preferences</p>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>

                <div className="flex">
                  <img
                    src={profileImage && profileImage[(profileImage.length - 1)].profileImage} alt="profileimage"
                    className=" rounded-full border-solid h-16 w-16 text-gray-900 border-2 mt-3 ml-3"
                  />
                  {/* <FaUser className="h-12 w-12 ml-4 rounded-3xl bg-gray-300 p-1.5 mt-4" /> */}
                  <input
                    className="h-8 mt-9 ml-4 w-80 mr-4 md:w-full md:mr-6 border-2 rounded-xl outline-none placeholder:text-gray-400 text-black"
                    type="text"
                    placeholder=" Whats happening?"
                    value={post}
                    onChange={(e) => setPost(e.target.value)} />
                </div>
                <br />
                <div className="flex">
                  <div className="col-2 ml-4">

                  </div>
                  <div className="col-8 flex w-1/2 ml-4 sm:gap-2 xl:gap-6 md:w-auto lg:w-auto xl:w-3/5">
                    <label htmlFor="img">
                      <MdImage className="ml-2 h-6 w-6 md:h-8 md:w-8 text-slate-900  cursor-pointer" /></label>
                    <input className="text-xs  " onChange={hanldeChange} type="file" id="img" name="img" style={{ display: "none" }} />
                    <div> <AiOutlineGif className="ml-2 h-6 w-6 md:h-8 md:w-8 text-slate-900 cursor-pointer	" /></div>
                    <div> <RiBuilding2Line className="ml-2 h-6 w-6 md:h-8 md:w-8 text-slate-900	 cursor-pointer	" onClick={() => setShowModal(true)} /></div>
                    {showModal ? (
                      <>
                        <div className="flex justify-center items-center sm:mr-64 lg:mr-0 overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none ">
                          <div className="relative  my-6 mx-auto w-80 lg:w-2/5   ">
                            <div className="rounded-lg h-64 lg:h-80 shadow-lg relative flex flex-col max-w-3xl  bg-white outline-none focus:outline-none ">

                              <div className="relative p-2 h-56 lg:h-80 flex-auto ">
                                <div className="flex h-10 ">
                                  <div className=" mt-1 flex justify-center items-center rounded-full w-8 h-8 lg:w-10 lg:h-10 border-2 border-none bg-blue-600 text-lg lg:text-xl  text-white">A</div>
                                  <div className="lg:mt-1"><input className="mt-2 ps-2 outline-none placeholder:text-xl placeholder:text-slate-500" type="text" placeholder="Ask a question..." /></div>
                                </div>
                                <form className="bg-white h-40 rounded px-8 pt-2 pb-8 w-4/4 lg:mt-3 lg:h-52 border-slate-300">
                                  <input placeholder="Choice 2" className="shadow appearance-none mt-1 border rounded-lg outline-none text-lg	 w-full h-8 lg:h-11 py-2 px-1 text-slate-600 " />
                                  <input placeholder="Choice 1" className="shadow appearance-none border rounded-lg outline-none text-lg w-full py-2 px-1 mt-2 h-8 lg:h-11 text-slate-600" /> <br />
                                  <div>

                                    <hr className="mt-1" />
                                  </div>
                                  <div className="mt-1 font-medium text-md text-gray-700">poll length</div>

                                  <div className="flex mt-1">
                                    <div class="mb-3 xl:w-96">
                                      <select class="form-select appearance-none block w-20 h-8 text-sm px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option selected>Days </option>
                                        <option value="1">Sunday</option>
                                        <option value="2">Monday</option>
                                        <option value="3">Tuesday</option>
                                        <option value="1">Wednesday</option>
                                        <option value="2">Thursday</option>
                                        <option value="3">Friday</option>
                                        <option value="1">Saturday</option>

                                      </select>
                                    </div>

                                    <div class="mb-3 xl:w-96">
                                      <select class="form-select appearance-none block  w-20 h-8 text-sm px-2 py-1  font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option selected><h3 className="text-3xl"> Hours </h3> </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="1">4</option>
                                        <option value="2">5</option>
                                        <option value="3">6</option>
                                        <option value="1">7</option>
                                        <option value="1">8</option>
                                        <option value="2">9</option>
                                        <option value="3">10</option>
                                        <option value="1">11</option>
                                        <option value="2">12</option>

                                      </select>
                                    </div>
                                    <div className="mb-3 xl:w-96">
                                      <select class="form-select appearance-none block w-20 h-8 text-sm px-2 py-1  font-normal  text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option selected>Days </option>
                                        <option value="1">Sunday</option>
                                        <option value="2">Monday</option>
                                        <option value="3">Tuesday</option>
                                        <option value="1">Wednesday</option>
                                        <option value="2">Thursday</option>
                                        <option value="3">Friday</option>
                                        <option value="1">Saturday</option>

                                      </select>

                                    </div>
                                  </div>

                                  <hr />
                                </form>

                              </div>
                              <div className="flex items-center mb-2 justify-center border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                  className="text-red-500 background-transparent font-medium text-xl h-5 px-2  flex justify-center  "
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  <h3> Remove poll </h3>
                                </button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : editModal ? (
                      <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="fasle">
                        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                          <div class="fixed inset-0 bg-opacity-75 mb-20 transition-opacity" aria-hidden="true"></div>

                          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                          <div class="relative inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-sm transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                              <div class=" w-full ">
                                Update Post
                                <div class="mt-1">
                                  <textarea rows="4" name="comment" onChange={(e) => onUpdateHandler(doc, e)} id="comment" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">{updateData.post}</textarea>
                                </div>
                              </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                              <button onClick={() =>
                                editPostHandler(updateData)} type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-violet-400 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">update</button>
                            </div>
                          </div>
                        </div>
                      </div>

                    ) : null}
                    <div>

                      <img
                        className="ml-1 h-6 w-6 md:h-8 md:w-8 text-slate-900 cursor-pointer"
                        src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                        onClick={() => setShowPicker(val => !val)} />
                      <div className="absolute flex justify-start left-20 lg:left-auto z-10 ">
                        {showPicker && <Picker
                          pickerStyle={{ width: '250px' }}
                          onEmojiClick={onEmojiClick}
                        />}
                      </div>
                    </div>
                    <div> <MdDateRange className="ml-2  h-6 w-6 md:h-8 md:w-8 text-slate-900	 cursor-pointer " onClick={() => setShowModalll(true)} /></div>
                    {showModalll ? (
                      <>
                        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  ">
                          <div className="relative  my-6 mx-auto max-w-3xl">
                            <div className="rounded-3xl shadow-lg relative w-80 sm:w-96 xl:w-full sm:mr-60 lg:mr-16 h-96 flex flex-col max-w-3xl bg-white outline-none focus:outline-none ">

                              <div className="relative p-2 flex-auto ms-3">
                                <div className="flex mt-2
                  ">
                                  <div className="col-1"><button
                                    className=""
                                    type="button"
                                    onClick={() => setShowModalll(false)}
                                  >
                                    <h3 className=" text-lg font-semibold font-red text-gray-700"> X </h3>
                                  </button>
                                  </div>

                                  <div>
                                    <h3 className="font-semibold text-xl xl:text-xl text-gray-700">Schedule</h3>
                                  </div>
                                  <div className=" w-full flex justify-end">
                                    <button className="bg-black p-2 text-white h-10 font-semibold rounded-xl text-md w-20">
                                      Confirm
                                    </button>
                                  </div>
                                </div>

                                <div className="flex mt-2 text-gray-700 ">
                                  <BsCalendarDate className="text-md xl:text-xl xl:mt-1 text-gray-700" />
                                  &nbsp;&nbsp; <p className="text-sm xl:text-xl">Will send on Thursday 12:00 PM Saturday</p>
                                </div>

                                <div className="text-md xl:text-xl xl:mt-2 text-semibold text-black">Date</div>
                                <div className="flex mt-1">
                                  <div class="mb-3">

                                    <select class="form-select appearance-none block w-20 xl:w-28  h-10 px-2 py-1 text-sm xl:text-lg font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                      <option selected>Month </option>
                                      <option value="1">January</option>
                                      <option value="2">February</option>
                                      <option value="3">March</option>
                                      <option value="1">April</option>
                                      <option value="2">May</option>
                                      <option value="3">June</option>
                                      <option value="1">July</option>
                                      <option value="3">August</option>
                                      <option value="1">September</option>
                                      <option value="2">October</option>
                                      <option value="3">November</option>
                                      <option value="1">December</option>

                                    </select>
                                  </div>
                                  {/* <input placeholder="Hours" type="text" className="outline-blue-400 rounded-lg text-2xl h-16 w-28 ml-12" /> */}
                                  <div class="mb-3 ml-2 xl:ml-4 ">
                                    <select class="form-select appearance-none block w-20 xl:w-28 h-10 px-2 py-1 font-normal text-sm xl:text-lg text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                      <option selected><h3 className="text-3xl"> Days </h3> </option>
                                      <option value="1">Sunday</option>
                                      <option value="2">Monday</option>
                                      <option value="3">Tuesday</option>
                                      <option value="1">Wednesday</option>
                                      <option value="2">Thursday</option>
                                      <option value="3">Friday</option>
                                      <option value="1">Saturday</option>

                                    </select>
                                  </div>
                                  <div className="mb-3 ml-4">
                                    <select class="form-select appearance-none block w-20 xl:w-28 px-2 py-1 h-10  font-normal text-sm xl:text-lg text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-800 rounded transition ease-in-out m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                      <option selected>Year </option>
                                      <option value="1">2021</option>
                                      <option value="2">2022</option>
                                      <option value="3">2023</option>
                                      
                                    </select>

                                  </div>
                                </div>
                                <div>

                                </div>
                                <div className="mt-1 font-medium text-md xl:text-lg text-gray-700">Time </div>

                                <div className="flex mt-1">
                                  <div class="mb-2">
                                    <select class="form-select appearance-none block w-20 xl:w-28 col-4 h-10 px-2 py-1 text-sm xl:text-lg font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                      <option selected>Hour </option>
                                      <option value="1">01</option>
                                      <option value="2">02</option>
                                      <option value="3">03</option>
                                      <option value="1">04</option>
                                      <option value="2">05</option>
                                      <option value="3">06</option>
                                      <option value="1">07</option>
                                      <option value="3">08</option>
                                      <option value="1">09</option>
                                      <option value="2">10</option>
                                      <option value="3">11</option>
                                      <option value="1">12</option>

                                    </select>
                                  </div>
                                  {/* <input placeholder="Hours" type="text" className="outline-blue-400 rounded-lg text-2xl h-16 w-28 ml-12" /> */}
                                  <div class="mb-3 ml-2 xl:ml-4 ">
                                    <select class="form-select appearance-none block w-20 xl:w-28 col-4 h-10 px-0 xl:ml-1 text-sm xl:text-lg font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                      <option selected><h3> Minutes </h3> </option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="1">4</option>
                                      <option value="2">5</option>
                                      <option value="3">6</option>
                                      <option value="1">7</option>
                                      <option value="1">8</option>
                                      <option value="2">9</option>
                                      <option value="3">10</option>
                                      <option value="1">11</option>
                                      <option value="2">12</option>

                                    </select>
                                  </div>
                                  <div className="mb-3 ml-2 xl:ml-4">
                                    <select class="form-select appearance-none block w-20 xl:w-28 col-4 px-0 h-10 text-sm xl:text-lg font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                      <option selected > &nbsp;AM/PM </option>
                                      <option value="1">AM</option>
                                      <option value="1">PM</option>
                                    </select>

                                  </div>
                                </div>

                                <h3 className="text-md xl:text-xl font-semibold text-slate-600"> Time zone </h3>

                                <div>
                                  <h3 className="text-lg font-medium pb-2 text-gray-700">Pacific Daylight Time</h3>
                                </div>
                                <div>
                                  <div>
                                    <button>
                                      <h3 className=" text-blue-600 ml-2 w-40 text-lg xl:text-xl rounded-full hover:bg-sky-100 mb-2">Shedule Tweets</h3>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {/* <GrLocation className="	ml-2 h-10 w-10 md:h-8 md:w-8 text-slate-900	 cursor-pointer	" /> */}
                  </div>
                  <div className="col-1 mt-1">
                    <button disabled={loading ? true : false} type="submit" className="bg-purple-500 hover:bg-purple-700 text-white rounded-lg w-16 h-8 mr-4 "> {loading ? "..." : "Tweet"}</button></div>
                </div>{" "}
                <br />

              </form>
            </div>

            <div className="col-12 overflow-x-scroll mt-2">
              <div className=" ml-2 w-28 h-42  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex-col">
                  <img className="rounded-t-lg mx-0 " src={pic} alt="akmal lala" />

                  <div className="w-8 h-8 -mt-28 ">
                  </div>

                  <div className="flex justify-center mt-16 ">
                    <div className=' absolute h-8 w-8 rounded-full flex justify-center items-center  bg-blue-700 bg-opacity-100 hover:bg-opacity-70 '>
                      <label htmlFor="img1">
                        <AiOutlinePlus className=" text-2xl font-semibold h-5 w-5 md:h-5 md:w-5 text-white cursor-pointer" /></label>
                      <input type="file" id='img1' name='img1' style={{ display: "none" }} onChange={(event) => handleChange(event)} />
                    </div>
                  </div>
                  <div className="flex justify-center mt-8"><p className="text-md font-medium">Create Story</p> </div>
                </div>

              </div>
            </div>
            {postData?.sort((a, b) => b.date > a.date ? 1 : -1).map((doc) => (




              <div className="mt-2 hover:bg-slate-100 w-full md:w-full md:ml-0 sm:w-full sm:ml-0 lg:w-full lg:ml-0 border-b-2 p-2 bg-white-100 mr-4  ">
                <div className="flex mr-2">
                  <img src={pic} alt="akmal" className="rounded-full  w-12 h-12 ml-1 mt-2 " />
                  <div>
                    <div className="ml-3 flex text-sm mt-3 text-gray-600">

                      Saqib khan&nbsp;
                      <MdVerified className=" text-blue-500 text-lg text-gray-600 " />
                      &nbsp;@saqibKhan
                      <div>
                        <Menu as="div" className="absolute  w-1/5  inline-block text-left  h-10  flex justify-end md:w-16 sm:w-1/6 md:w-3/12 lg:w-28 xl:w-72 ">
                          <div className=" ">
                            <Menu.Button className="bg-gray-100 ml-auto w-10 h-8 rounded-md flex justify-center items-center absolute text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-100">
                              <span className="sr-only">Open options</span>

                              <BsThreeDots
                                className="h-5 w-5"
                                aria-hidden="true"
                                
                              />
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
                            <Menu.Items className=" absolute  ml-10  mt-3 w-56 h-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  <a onClick={() => editHanlder(doc)}
                                    className="flex text-gray-900 text-gray-700,
                    block px-4  mt-4 py-2  mt-3 border-b "
                                  >
                                    <FaRegEdit className="mt-1 text-2xl text-gray-700" />
                                    <h1 className="ml-4 text-xl cursor-pointer">Edit</h1>
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a onClick={() => deleteHandler(doc._id)}
                                    className="flex text-gray-900 text-gray-700 block px-4 py-2 mt-4  border-b">

                                    <RiDeleteBin4Line className="mt-1 text-2xl text-gray-700" />
                                    <h1 className="ml-4 text-xl cursor-pointer"

                                    >Delete</h1>
                                  </a>
                                </Menu.Item>


                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                        {
                          show ?
                            <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="fasle">
                              <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                                <div class="fixed inset-0 bg-opacity-75 mb-20 transition-opacity" aria-hidden="true"></div>

                                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                                <div class="relative inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-sm transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div class="sm:flex sm:items-start">
                                      <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                      </div>
                                      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Delete post</h3>
                                        <div class="mt-2">
                                          <p class="text-sm text-gray-500">Are you sure you want to Delete your post?</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button onClick={() => deletePostMethod(deleteId)} type="button" class="w-full h-10 mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Delete</button>
                                    <button onClick={() => setShow(false)} type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                                  </div>
                                </div>
                              </div>
                            </div> : null
                        }

                      </div>
                      {showModal &&
                        <Deletealert setShowModal={setShowModal} deletePostMethod={deletePostMethod} deleteId={deleteId} />
                      }

                    </div>
                    <span className=" flex flex-col ml-3">
                      <p className="text-gray-500 text-sm ">Few minutes ago</p>
                      <p className="text-sm  text-gray-600">
                        {doc.post}
                      </p>
                      <br />
                      {console.log("imageUrl", doc.image)}
                      {doc.fileType === "video" &&
                        <video className="w-screen max-h-80" controls >
                          <source src={doc.fileUrl} type="video/mp4" />
                        </video>
                      }
                      {doc.fileType === "image" && <img src={doc.fileUrl} alt={doc.fileUrl} className="w-screen h-96 rounded-lg" />}
                    </span>

                  </div>
                </div>
                <br />
                <br />
                <div className="flex  justify-center ">
                  <button className="    text-black ml-1 rounded-sm mt-2 items-center justify-center h-7 md:h-9 md:ml-3  text-xs flex w-16 md:w-32  cursor-pointer ">
                    <LikeBtn />
                  </button>
                  <button className="   text-black  ml-1 rounded-sm mt-2 items-center justify-center h-7 md:h-9 md:ml-3 text-xs flex w-20 md:w-32  cursor-pointer ">
                    {" "}
                    <Retweet />
                  </button>
                  <button className="   text-black  ml-1 rounded-sm mt-2 items-center justify-center h-7 md:h-9 md:ml-3 text-xs w-20 flex md:w-32 cursor-pointer ">

                    &nbsp;<Comment />
                  </button>
                  <button className="   text-black  ml-1 rounded-sm mt-2 items-center justify-center h-7 md:h-9 md:ml-3 text-xs flex w-10 md:w-16 cursor-pointer ">
                    {" "}
                    <div className="h-8 w-8 flex justify-center items-center hover:bg-blue-200 rounded-full">

                      <FiShare className="text-2xl  hover:text-blue-400" />
                    </div>
                    &nbsp;{" "}
                  </button>
                </div>
                <br />
              </div>
            ))}
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  posts: state.post.posts,
  postLoading: state.post.postLoading,
})
export default connect(mapStateToProps, { getpost })(Feed)