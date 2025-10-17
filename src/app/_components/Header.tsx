"use client";
import { Category } from "@/components/my";
import React from "react";

export const Header = () => {
  return (
    <div className=" bg-red-800  fixed z-10">
      <div className="flex flex-end rounded-full  fixed top-10 z-10 right-10">
        <img
          className="w-[36px] h-[36px] rounded-full"
          src="https://yt3.googleusercontent.com/qGrcViAdsmfdL8NhR03s6jZVi2AP4A03XeBFShu2M4Jd88k1fNXDnpMEmHU6CvNJuMyA2z1maA0=s900-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </div>
      <div className="bg-accent">
        <Category></Category>
      </div>
    </div>
  );
};
