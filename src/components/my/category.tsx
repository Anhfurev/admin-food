"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { CategoryType } from "./categoryType";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
type dataType = {
  _id: string;
  name: string;
  __v: string;
};
export const Category = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [categoryInput, setCategoryInput] = useState("");
  const [activeId, setActiveId] = useState<number | null>(null);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const result = await fetch("http://localhost:4000/api/categories");
    const responseData = await result.json();
    setCategories(responseData.data);
  };

  async function AddCategoryName() {
    await fetch("http://localhost:4000/api/categories", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryInput,
      }),
    });
    await getCategories();
  }

  return (
    <div className="flex">
      <div className="min-h-70 bg-accent w-full fixed right-[0px] top-0">
        <div className="flex-shrink-0 w-12 h-30"></div>
        <div className="flex">
          <div className="flex-shrink-0 w-56 h-10"></div>
          <div className="p-6 bg-white h-fit w-full rounded-2xl mr-10 right-4  ">
            <h1 className="font-bold text-[20px] mb-4">Dishes category</h1>
            <div className="flex gap-3 items-center">
              <div className="flex flex-wrap gap-3">
                {categories.map((category: any) => (
                  <div key={category._id}>
                    <CategoryType
                      activeId={category._id === activeId}
                      categoryName={category.name}
                      onClick={() => {
                        setActiveId(category._id);
                      }}
                    />
                  </div>
                ))}
                <Dialog>
                  <DialogTrigger>
                    <div className="bg-red-500 w-10 h-10 hover:bg-black  rounded-full text-white  font-extralight flex justify-center text-2xl">
                      <h1 className="mt-[1px]">+</h1>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="[&>button]:top-[33px] [&>button]:right-[33px]">
                    <DialogHeader className="flex flex-row items-center justify-between ">
                      <DialogTitle asChild>
                        <h1>Add new category</h1>
                      </DialogTitle>
                      <div className="w-[36px] flex justify-end h-[36px] bg-secondary rounded-full"></div>
                    </DialogHeader>

                    <h1 className="mt-5">Category name</h1>
                    <Input
                      onChange={(e) => setCategoryInput(e.target.value)}
                      placeholder="Type category name..."
                    />
                    <div className="flex justify-end mt-8">
                      <Button
                        onClick={AddCategoryName}
                        className="w-[30%] h-10 flex-end"
                      >
                        Add category
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
