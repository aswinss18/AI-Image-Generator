import React from "react";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");

  return (
    <div className="flex justify-between items-center px-5 sm:px-10 lg:px-24  bg-bgLight h-16 w-full">
      <span className="text-4xl font-bold text-white ">GenAi</span>
      {path[1] === "post" ? (
        <Button handleClick={() => navigate("/")} type="secondary">
          Explore Posts
        </Button>
      ) : (
        <Button handleClick={() => navigate("/post")} type="primary">
          Create new post
        </Button>
      )}
    </div>
  );
}
