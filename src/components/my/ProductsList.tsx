"use client";
import React from "react";
import { AddNewDish } from "./AddNewDish";
import { ProductList } from "@/components/my";

export const ProductsList = () => {
  return (
    <div className="h-fit p-5 bg-white rounded-2xl mt-[24px]">
      <div>
        <h1 className="text-[20px] font-bold">
          Appetizers <span>{"(6)"}</span>
        </h1>
      </div>
      <div className="pt-4 flex flex-wrap gap-[16px]">
        <AddNewDish></AddNewDish>
        <ProductList></ProductList>
      </div>
    </div>
  );
};
