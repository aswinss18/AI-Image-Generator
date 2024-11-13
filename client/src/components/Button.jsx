import React from "react";

export default function Button({ children, handleClick, type }) {
  if (type === "primary") {
    return (
      <button
        onClick={handleClick}
        className="bg-primary text-white font-semibold rounded-lg h-10 flex justify-center items-center px-5 hover:bg-blue-600
  transition all ease-in-out duration-300 cursor-pointer hover:scale-105 gap-2
  "
      >
        <img src="gallery.svg" alt="post" className="w-5 h-5" />
        {children}
      </button>
    );
  } else if (type === "secondary") {
    return (
      <button
        onClick={handleClick}
        className="bg-secondary text-white font-semibold rounded-lg h-10 flex justify-center items-center px-5 hover:bg-blue-600
  transition all ease-in-out duration-300 cursor-pointer hover:scale-105 gap-2
  "
      >
        <img src="explore.svg" alt="explore" className="w-5 h-5" />
        {children}
      </button>
    );
  }
}
