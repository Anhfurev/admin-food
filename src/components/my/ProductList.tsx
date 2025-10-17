"use client";
import { Pencil } from "lucide-react";
import React from "react";
import { EditDish } from "./EditDish";
export const ProductList = ({ dish }: any) => {
  return (
    <div
      className="w-[270px] h-[241px]  rounded-[20px]  flex-col  flex   border-1 border-border items-center p-4 justify-between z-1
          "
    >
      <img
        className="w-[239px] h-[129px] rounded-[12px]"
        src="https://www.allrecipes.com/thmb/OJ28fIFte6Pyg93ML8IM-APbu1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-14554-sirloin-steak-with-garlic-butter-hero-4x3-d12fa79836754fcf850388e4677bbf55.jpg"
        alt=""
      />
      <EditDish dish={dish} />
      <div className="flex-col text-[14px] justify-center">
        <div className="flex justify-between items-center">
          <h1 className="text-red-500 font-medium">{dish.name}</h1>
          <p className="text-[12px]">{dish.price}</p>
        </div>

        <p className="text-[12px] mt-[8px]">{dish.incredients}</p>
      </div>
    </div>
  );
};
