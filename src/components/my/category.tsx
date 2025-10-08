"use client";
import React from "react";
import { CategoryType } from "./categoryType";

export const Category = () => {
  return (
    <div className="p-6 bg-white rounded-2xl mt-6 ">
      <h1 className="font-bold text-[20px] mb-4">Dishes category</h1>
      <div className="flex gap-3 items-center">
        <div>
          <CategoryType />
        </div>
        <div className="bg-red-500 w-10 h-10  rounded-full text-white text-center font-extralight flex justify-center text-2xl">
          <h1 className="mt-[1px]">+</h1>
        </div>
      </div>
    </div>
  );
};
