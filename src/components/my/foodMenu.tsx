"use client";
import { LayoutDashboard } from "lucide-react";
import React, { act, useState } from "react";
export const FoodMenu = ({ handleClick, activeButton }: any) => {
  const isActive = activeButton === "FoodMenu";

  return (
    <div className="mt-10">
      <button
        onClick={() => handleClick("FoodMenu")}
        className={`bg-black ${
          isActive ? "bg-black text-white " : "text-black bg-white "
        }  rounded-[29px] flex px-6 gap-2 items-center w-[165px] h-[40px] font-medium`}
      >
        <LayoutDashboard strokeWidth={1.25} />
        Food menu
      </button>
    </div>
  );
};
