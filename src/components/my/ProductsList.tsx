"use client";
import React, { useEffect, useState } from "react";
import { AddNewDish } from "./AddNewDish";
import { ProductList } from "@/components/my";

export const ProductsList = ({ getDishDatas, datasOfDish }: any) => {
  return (
    <div className="h-fit p-5 bg-white rounded-2xl mt-[24px]">
      <div>
        <h1 className="text-[20px] font-bold">
          Appetizers <span>{"(6)"}</span>
        </h1>
      </div>
      <div className="pt-4 flex flex-wrap gap-[16px]">
        <AddNewDish></AddNewDish>
        {datasOfDish?.map((dish: any) => (
          <div key={dish._id}>
            <ProductList
              datasOfDish={datasOfDish}
              getDishDatas={getDishDatas}
              dish={dish}
            ></ProductList>
          </div>
        ))}
      </div>
    </div>
  );
};
