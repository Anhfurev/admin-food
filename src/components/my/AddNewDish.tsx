"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const AddNewDish = () => {
  const [categoryCheck, setCategoryCheck] = React.useState("all");
  const [image, setImage] = useState<File | undefined>();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [ingredients, setIngredients] = useState<string>("");
  const [dataCategories, setDataCategories] = useState<any>([]);
  const [value, setValue] = React.useState("68edace9834d68c0c4df5fc7");

  // useEffect(() => {
  //   getDataHandler();
  // }, []);

  const addFoodHandler = async () => {
    if (!name || !price || !image || !ingredients || !value) {
      alert("All fields are required");
      return;
    }

    const form = new FormData();

    form.append("name", name);
    form.append("price", String(price));
    form.append("image", image); // File object
    form.append("ingredients", ingredients);
    form.append("categoryId", value);

    try {
      const response = await fetch("http://localhost:4000/api/food", {
        method: "POST",
        body: form,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      alert("Failed to create food");
    }
  };
  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };
  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };
  const ingredientsChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIngredients(e.target.value);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div
            className="w-[270px] h-[241px]  border-dashed rounded-[20px] outline-offset-2 flex-col space-[6px] flex gap-5  border-1 border-[#EF4444] items-center justify-center
          "
          >
            <div className="bg-red-500 w-10 h-10 hover:bg-black  rounded-full text-white font-extralight text-center flex justify-center text-2xl">
              <h1 className="mt-[1px]">+</h1>
            </div>
            <h1 className="font-medium">
              Add new Dish to<p>Appetizers</p>
            </h1>
          </div>
        </DialogTrigger>
        <DialogContent className="p-5 [&>button]:top-[30px] [&>button]:right-[30px] ">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle className="mt-2 flex">
                Add new Dish to <p className="ml-2"> Appetizers</p>
              </DialogTitle>
              <div className="w-[36px] flex justify-end h-[36px] bg-secondary rounded-full"></div>
            </div>

            <div className="grid gap-4 mt-4">
              <div className="flex text-[14px] font-medium">
                <div className=" gap-3  justify-between ">
                  <Label className=" text-black" htmlFor="name">
                    Food name
                  </Label>
                  <Input
                    className="w-[194px] mt-1"
                    id="name"
                    name="name"
                    value={name}
                    onChange={nameChangeHandler}
                  />
                </div>
                <div className=" gap-3 justify-between">
                  <Label className=" text-black flex-shrink-0 " htmlFor="price">
                    Food price
                  </Label>
                  <Input
                    className="w-[194px] mt-1"
                    id="price"
                    name="price"
                    type="number"
                    value={price}
                    onChange={priceChangeHandler}
                  />
                </div>
              </div>

              <div className="flex justify-between gap-3"></div>

              <div className="flex justify-between gap-3">
                <Label className="text-[12px] text-black" htmlFor="ingredients">
                  Ingredients
                </Label>
                <Input
                  className="w-80"
                  placeholder="List ingredients..."
                  id="ingredients"
                  name="ingredients"
                  value={ingredients}
                  onChange={ingredientsChangeHandler}
                />
                <Input />
              </div>

              <div className=" justify-between w-full  flex gap-3">
                <Label className="text-[12px] text-black" htmlFor="picture">
                  Image
                </Label>
                <Input
                  className="w-80"
                  id="picture"
                  type="file"
                  onChange={fileChangeHandler}
                />
              </div>
              <Button
                type="submit"
                size={"sm"}
                className="w-fit px-4 py-[10px]"
                onClick={addFoodHandler}
              >
                <p className="leading-5"> Save changes</p>
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
