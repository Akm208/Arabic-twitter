import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa";

function Retweet() {
  const [likes, setLikes] = useState(0);

  return <button onClick={() => setLikes(likes + 1)}>
    <div className="item-center justify-center flex gap-2">
      <div className="text-2xl hover:bg-green-200 rounded-full hover:text-green-400 h-8 w-8 flex justify-center items-center ">
        <FaRetweet/>
      </div>
      <div className="mt-2">{likes}</div>
    </div>
  </button>;
}

export default Retweet;