import React from "react";

export default function CreatePostForm({
  post,
  setPost,
  createPostLoading,
  generateImageLoading,
  setGenerateImageLoading,
  setCreatePostLoading,
}) {
  console.log(post);

  const generateImageFn = () => {
    setGenerateImageLoading(true);
  };
  const createPostFn = () => {
    setCreatePostLoading(true);
  };

  return (
    <form
      action=""
      className="text-white font-semibold flex flex-col mt-10 gap-10 items-center  text-center w-[90%]  sm:w-[80%] md:w-[70%] lg:w-[40%] px-5 "
    >
      <h1 className="text-2xl font-bold md:text-3xl">
        Generate image with prompt
      </h1>
      <p className="text-lg text-text_secondary">
        Write your prompt according to the image you want
      </p>
      <div className="w-full text-left space-y-2">
        <span>Author</span>
        <input
          type="text"
          className="bg-inherit border-text_secondary border-2 rounded-lg  w-full placeholder:text-text_secondary font-semibold p-5  "
          placeholder="Write your prompt according to the image you want"
          value={post?.author}
          onChange={(e) => setPost({ ...post, author: e.target.value })}
        />
      </div>
      <div className="w-full text-left space-y-2">
        <span>Prompt</span>
        <textarea
          type="text"
          className="bg-inherit border-text_secondary border-2 rounded-lg w-full     placeholder:text-text_secondary font-semibold p-5 "
          placeholder="Write your prompt according to the image you want"
          value={post?.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
      </div>
      <div className="  flex flex-col gap-5 justify-between md:flex-row w-full  ">
        <button
          className="bg-primary rounded-lg h-12 font-semibold text-lg  hover:bg-blue-700 hover:scale-105 transition-all ease-in-out duration-300 flex items-center justify-center gap-2 md:w-[50%]  disabled:bg-slate-500 disabled:hover:scale-100"
          disabled={post?.author === "" || post?.prompt === ""}
          onClick={generateImageFn}
        >
          <img src="star.png" alt="star" className="h-7 w-7" />
          <span>Generate Image</span>
        </button>
        <button
          className="bg-secondary rounded-lg h-12  font-semibold text-lg   hover:bg-blue-700 hover:scale-105 transition-all ease-in-out duration-300 flex items-center justify-center gap-2 md:w-[50%] disabled:bg-slate-500 disabled:hover:scale-100"
          disabled={post?.author === "" || post?.prompt === ""}
          onClick={createPostFn}
        >
          <img src="pencil.svg" alt="post" className="h-5 w-5" />
          <span>Post Image</span>
        </button>
      </div>
    </form>
  );
}
