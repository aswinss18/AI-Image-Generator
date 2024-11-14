import React from "react";

export default function GeneratedImage({ src, loading }) {
  return (
    <div className="border-2 border-dotted border-yellow  text-white rounded-lg min-h-[300px] min-w-[450px] flex justify-center pt-5">
      {loading ? (
        <p>Loading...</p>
      ) : src ? (
        <img src={src} alt={src} />
      ) : (
        <p>Write a prompt to generate</p>
      )}
    </div>
  );
}
