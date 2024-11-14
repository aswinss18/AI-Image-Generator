import React, { useState } from "react";
import GeneratedImage from "../components/GeneratedImage";
import CreatePostForm from "../components/CreatePostForm";

export default function CreatePost() {
  const [post, setPost] = useState({ author: "", prompt: "", photo: "" });
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);

  return (
    <div className="flex flex-col items-center w-full md:flex-row md:justify-center gap-10 md:gap-16">
      <CreatePostForm
        post={post}
        setPost={setPost}
        createPostLoading={createPostLoading}
        generateImageLoading={generateImageLoading}
        setGenerateImageLoading={setGenerateImageLoading}
        setCreatePostLoading={setCreatePostLoading}
      />
      <GeneratedImage src={post?.photo} loading={generateImageLoading} />
    </div>
  );
}
