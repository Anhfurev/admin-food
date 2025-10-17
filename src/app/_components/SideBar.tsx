"use client";
import { FoodMenu, LogoContainer, Orders } from "@/components/my";
import React from "react";

export const SideBar = () => {
  const [activeButton, setActiveButton] = React.useState("FoodMenu");
  const [category, setCategory] = React.useState("FoodMenu");
  const handleClick = (category: string) => {
    setActiveButton(category);
    setCategory(category);
  };

  return (
    <div className="w-[205px] bg-white h-[100vh] py-[36px] px-5 fixed z-50">
      <LogoContainer></LogoContainer>
      <div className="flex flex-col gap-6">
        <FoodMenu
          handleClick={handleClick}
          activeButton={activeButton}
        ></FoodMenu>
        <Orders handleClick={handleClick} activeButton={activeButton}></Orders>
      </div>
    </div>
  );
};
