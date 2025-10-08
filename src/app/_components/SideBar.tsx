import { LogoContainer, FoodMenu, Orders } from "@/components/my";

import React from "react";

export const SideBar = () => {
  return (
    <div className="w-[205px] bg-white h-[100vh] py-[36px] px-5">
      <LogoContainer></LogoContainer>
      <div className="flex flex-col gap-6">
        <FoodMenu></FoodMenu>
        <Orders></Orders>
      </div>
    </div>
  );
};
