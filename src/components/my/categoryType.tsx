"use client";
import React, { useState } from "react";

export const CategoryType = ({ categoryName, activeId, onClick }: any) => {
  return (
    <div
      onClick={onClick}
      className={`${
        activeId ? " border-red-500 " : " border-border"
      } flex gap-[8px] w-fit px-[16px] py-[8px] border hover:bg-accent  rounded-full `}
    >
      <h1 className="font-medium">{categoryName}</h1>
      <div className="bg-black rounded-[15px] text-white w-fit px-[10px]">
        <p>132</p>
      </div>
    </div>
  );
};
