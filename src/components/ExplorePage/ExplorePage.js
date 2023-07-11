import React from 'react'
import "./Explore.css"
import {FiSettings} from "react-icons/fi"

function ExplorePage() {
  return (
    <div>
      <div className='flex'><input className='search w-5/12 rounded-xl h-11 mt-1 pl-2 bg-slate-200		outline-white	 ' type="search" placeholder='Search twitter'  /> <span className='pt-5 pl-2 h-12 w-5'>< FiSettings /></span>
         
      </div>
    <div className='pic mt-1'>
      <div>
        <h6 className='pt-64 text-white font-medium pl-1'>lorem ipsum saaga</h6>
      </div>
      <div>
        <h4 className='text-white font-large font-bold text-2xl pl-1 '>Lorem, ipsum dolor sit amet ctur adipisicing elit. Debitis <br /> distinctio aliquid ab, in quia illum!</h4>
      </div>
        </div>
        <div>
          <h1 className='font-bold text-2xl pt-4 pl-2 '>Trends for you</h1>
        </div>
        <div>
          <h3 className='pt-4 pl-3 text-slate-500	'>politics-Trend</h3>
          
          <h3 className='font-bold text-1xl pl-3'>#SupremeCourt </h3>
        <h3 className='pl-3 text-slate-500	'>  2.7k Tweets </h3>
        </div> 
        <div>
          <h3 className='pt-4 pl-3 text-slate-500	'>politics-Trend</h3>
          
          <h3 className='font-bold text-1xl pl-3'>#ConfidenceVote </h3>
        <h3 className='pl-3 text-slate-500	'>  2.7k Tweets </h3>
        </div> 
        <div>
          <h3 className='pt-4 pl-3 text-slate-500	'>politics-Trend</h3>
          
          <h3 className='font-bold text-1xl pl-3'>#Cricket </h3>
        <h3 className='pl-3 text-slate-500	'>  2.7k Tweets </h3>
        </div>
        </div>
  )
}

export default ExplorePage