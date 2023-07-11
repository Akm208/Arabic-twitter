
import React, { useState } from 'react'
import { auth } from "./../FirebaseConfig/FirebaseConfig"
import profileDefaultImage from "../../assets/profile.png";
import { addDoc, collection, doc, query, getDocs, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore'
import { storage } from "../FirebaseConfig/FirebaseConfig"
import { db } from "./../FirebaseConfig/FirebaseConfig";
import { v4 } from "uuid"
import { ref, uploadBytes, getDownloadURL, listAll, list } from "firebase/storage"
import { setProfileImage } from '../../api';
import { useSelector } from 'react-redux';
import { getprofile } from '../../redux/actions/profileActions';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BsCameraFill } from "react-icons/bs";
import { Spinner } from 'react-bootstrap';


function Sidebar({ getprofile, profileImage, imageLoading }) {
  const [profile, setProfile] = useState()
  const [loader, setLoader] = useState(false)


  useEffect(() => {
    if (profileImage === null && !imageLoading) getprofile()
  }, [profileImage])

  const upload = async (url) => {
    console.log("profileUrl from upload", profile)
    setProfileImage({ profileImage: url }).then((res) => {
      console.log(res)
      getprofile()
    }).catch((e) => {
      console.log(e)
    })


  };


  const uploadFile = async (file) => {
    console.log("inisde upload file ", file);
    if (file == null) return;
    const imageRef = ref(storage, `profile/${file.name + v4()}`);
    await uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log("urr", url)
        upload(url);
        // setLoader(true)
        console.log("profile", profile)
      }).catch(e => console.log("error", e));
    }).catch(e => console.log("error", e));
  };

  const handleChange = (event) => {

    uploadFile(event.target.files[0])

    setLoader(true)
    setTimeout(() => {
      setLoader(false)
      // setOpen(false)
    }, 10000)

  }




  return (
    <div className="2xl:w-96 ml-3 md:ml-4 mt-20  hidden lg:block lg:w-60 xl:w-80 h-screen md:w-80 fixed">
      <div className=" 2xl:w-80 2xl:ml-16 mr-2 mt-2 md:w-72 ml-5 lg:w-56 xl:w-72 md:text-sm h-full rounded-xl  overflow-y-scroll scrollbar scrollbar-thumb-transparent scrollbar-track-transparent  ">
        <div className="2xl:w-80 rounded-xl  bg-slate-100">
          <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
          <div className="flex justify-center -mt-8 relative">
            <div className=''>
              {loader ? <Spinner animation="grow" /> :

                <img
                  src={profileImage ? profileImage[(profileImage.length - 1)].profileImage : (profileDefaultImage)}
                  alt="profileImage" className="rounded-full border-solid h-24 w-24 border-white border-2 "
                />
              }
            </div>
            <div className=' absolute h-8 w-8 rounded-full flex justify-center items-center mt-14 ml-16 bg-purple-500 bg-opacity-50 hover:bg-opacity-100 '>
              <label htmlFor="img1">
                <BsCameraFill className=" h-5 w-5 md:h-5 md:w-5 text-white cursor-pointer" /></label>
              <input type="file" id='img1' name='img1' style={{ display: "none" }} onChange={(event) => handleChange(event)} />
            </div>
          </div>
          <div className="text-center px-3 pb-6 pt-2">
            <h className="text-black text-2xl bold font-sans">Muhammad Akmal Khan</h>
            <h1>{auth.currentUser?.email}</h1>

            <p className="mt-2 font-sans font-light text-black">
              BrainsPK Manager Amir khan
            </p>
          </div>
          <br />
          <div className="flex justify-center pb-2 text-black border-y-2">
            <div className="text-center mr-3 mt-2 border-r pr-3">
              <h2>6,664</h2>
              <span>Following</span>
            </div>
            <div className="text-center mt-2">
              <h2>9,991</h2>
              <span>Followers</span>
            </div>
          </div>
          <div className="text-center py-6 text-cyan-600">
            <h1 className="text-bold"> My Profile</h1>
          </div>
        </div>
        <br />

        <div className="rounded-2xl 2xl:w-auto overflow-hidden shadow-xl max-w-xs w-auto  bg-slate-100">
          <h1 className="text-black px-4 py-2">Who is the follow you</h1>

          <div className="flex justify-start my-6 px-4">
            <img
              src={profile}
              className="rounded-full border-solid h-12 w-12 border-white border-2 -mt-3"
            />
            <h1 className="text-black ml-2">Product Hunt</h1>
            <button className="h-8 w-36 ml-2 bg-purple-500  rounded-lg ">
              <h1 className="text-sm text-white">Follow</h1>
            </button>
          </div>
          <div className="flex justify-start my-6 px-4">
            <img
              src={profile}
              className="rounded-full border-solid h-12 w-12 border-white border-2 -mt-3"
            />
            <h1 className="text-black ml-2">Product Hunt</h1>
            <button className="h-8 w-36 ml-2 bg-purple-500  rounded-lg ">
              <h1 className="text-sm text-white">Follow</h1>
            </button>
          </div>
          <div className="flex justify-start my-6 px-4">
            <img
              src={profile}
              className="rounded-full border-solid h-12 w-12 border-white border-2 -mt-3"
            />
            <h1 className="text-black ml-2">Product Hunt</h1>
            <button className="h-8 w-36 ml-2 bg-purple-500  rounded-lg ">
              <h1 className="text-sm text-white">Follow</h1>
            </button>
          </div>
          <div className="flex justify-start my-6 px-4">
            <img
              src={profile}
              className="rounded-full border-solid h-12 w-12 border-white border-2 -mt-3"
            />
            <h1 className="text-black ml-2">Product Hunt</h1>
            <button className="h-8 w-36 ml-2 bg-purple-500  rounded-lg ">
              <h1 className="text-sm text-white">Follow</h1>
            </button>
          </div>
          <div className="flex justify-start my-6 px-4">
            <img
              src={profile}
              className="rounded-full border-solid h-12 w-12 border-white border-2 -mt-3"
            />
            <h1 className="text-black ml-2">Product Hunt</h1>
            <button className="h-8 w-36 ml-2 bg-purple-500  rounded-lg ">
              <h1 className="text-sm text-white">Follow</h1>
            </button>
          </div>
          <div className="flex justify-start my-6 px-4">
            <img
              src={profile}
              className="rounded-full border-solid h-12 w-12 border-white border-2 -mt-3"
            />
            <h1 className="text-black ml-2">Product Hunt</h1>
            <button className="h-8 w-36 ml-2 bg-purple-500  rounded-lg ">
              <h1 className="text-sm text-white">Follow</h1>
            </button>
          </div>
          <div>
            <p className=" px-3 text-cyan-600">Show More</p>
          </div>
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  profileImage: state.profileImage.profileImage,
  imageLoading: state.profileImage.ImageLoading
})
export default connect(mapStateToProps, { getprofile })(Sidebar)
