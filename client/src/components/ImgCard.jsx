import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FileSaver from "file-saver";

export default function ImgCard({ item }) {
  return (
    <div className="relative overflow-hidden flex rounded-2xl border-2 cursor-pointer hover:scale-105 hover:border-[3px] transition-all ease-in-out duration-300 h-[20rem] w-[30rem]">
      <LazyLoadImage width="100%" src={item?.photo} />
      <div className="absolute w-full h-full flex flex-col  justify-between py-10 px-5 items-center text-center opacity-0 hover:opacity-100 hover:backdrop-blur-sm transition-all ease-in-out duration-300 bg-black bg-opacity-40 ">
        <p>{item?.prompt}</p>
        <div className="flex justify-between items-center  w-full">
          <div className="flex gap-2 items-center text-lg font-semibold">
            <span className="bg-text_secondary w-7 h-7 text-xl rounded-full">
              {item?.author[0]}
            </span>
            <span> {item?.author}</span>
          </div>
          <div
            className="w-5 h-5"
            onClick={() => FileSaver.saveAs(item?.photo, "GenAi.jpg")}
          >
            <img src="download.svg" className="w-full h-full" alt="download" />
          </div>
        </div>
      </div>
    </div>
  );
}
