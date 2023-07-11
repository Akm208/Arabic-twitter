import React, { useState } from "react";
import { BiMessageRounded } from "react-icons/bi";

function Comment() {
  const [likes, setLikes] = useState(0);

  return <button onClick={() => setLikes(likes + 1)}>
    <div className="item-center justify-center flex gap-2">
      <div className="text-2xl hover:bg-blue-200 rounded-full hover:text-blue-400 h-8 w-8 flex justify-center items-center ">
        <BiMessageRounded />
      </div>
      <div className="mt-2">{likes}</div>
    </div>
  </button>;
}

export default Comment;