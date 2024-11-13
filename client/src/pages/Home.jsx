import React from "react";
import ImgCard from "../components/ImgCard";

export default function Home() {
  const item = {
    prompt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptates fugiat explicabo unde cum incidunt quod blanditiis impedit modi expedita?`,
    photo: "vite.svg",
    author: "Aswin",
  };

  return (
    <div className="w-full h-full flex flex-col gap-5 items-center text-white p-[30px] ">
      <h1 className="text-3xl font-bold text-center">
        Explore popular posts in the Community!
      </h1>
      <span className="text-xl font-semibold text-secondary">
        Generated with Ai
      </span>
      <div className="border-2 border-text_secondary  flex items-center rounded-lg h-10 px-4">
        <img src="search.svg" alt="search" className="h-5 w-5" />
        <input
          type="text"
          className="bg-inherit outline-none px-2 w-fullplaceholder:text-text_secondary text-md font-semibold"
          placeholder="Search with prompt or name..."
        />
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-10">
        <ImgCard item={item} />
      </div>
    </div>
  );
}
