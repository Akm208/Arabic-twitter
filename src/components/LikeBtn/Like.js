import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

function LikeBtn() {
  const [likes, setLikes] = useState(0);

  return <button onClick={() => setLikes(likes + 1)}>
    <div className="item-center justify-center flex gap-2">
      <div className="text-2xl hover:bg-red-200 rounded-full hover:text-red-400 h-8 w-8 flex justify-center items-center ">
        <AiOutlineHeart />
      </div>
      <div className="mt-2">{likes}</div>
    </div>
  </button>;
}

export default LikeBtn;