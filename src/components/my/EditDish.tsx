"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
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
import { ComboboxDemo } from "./comboBox";
import { Pencil, X } from "lucide-react";
import { Textarea } from "../ui/textarea";

export const EditDish = ({ dish }: any) => {
  const [categoryCheck, setCategoryCheck] = React.useState("all");
  const [checkImage, setCheckImage] = React.useState(false);

  const [image, setImage] = useState<File | undefined>(undefined);
  const [name, setName] = useState<string>(dish.name);
  const [price, setPrice] = useState<number | undefined>(dish.price);
  const [ingredients, setIngredients] = useState<string>(dish.ingredients);
  const [value, setValue] = React.useState(dish.categoryId.name);
  const [id, setId] = React.useState(dish._id);
  const [imageUrl, setImageUrl] = React.useState(dish.imageUrl);

  const changeDishHandler = async () => {
    if (!name || !price || !image || image || !ingredients || !value) {
      alert("All fields are required");
      return;
    }

    const form = new FormData();

    form.append("name", name);
    form.append("price", String(price));
    form.append("image", image); // File object
    form.append("ingredients", ingredients);
    form.append("categoryId", value);
    form.append("id", id);
    form.append("imageUrl", imageUrl);

    try {
      const response = await fetch(`http://localhost:4000/api/food/update`, {
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
  const ingredientsChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setIngredients(e.target.value);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="bg-white hover:bg-black hover:opacity-80 w-10 h-10 relative  rounded-full text-white text-center items-center flex justify-center text-2xl top-[-59] left-22 px-2 py-4">
            <Pencil className="text-red-500 w-[19px] z-1" />
          </div>
        </DialogTrigger>
        <DialogContent className="p-5 w-[420px] [&>button]:top-[30px] [&>button]:right-[30px] ">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle className="mt-2">Dishes info</DialogTitle>
              <div className="w-[36px] flex justify-end h-[36px] bg-secondary rounded-full"></div>
            </div>

            <div className="grid gap-4 mt-4">
              <div className=" gap-3 flex  justify-between">
                <Label
                  className="text-[12px] text-muted-foreground flex-shrink-0"
                  htmlFor="name"
                >
                  Dish name
                </Label>
                <Input
                  className="w-[288px]"
                  id="name"
                  name="name"
                  value={name}
                  onChange={nameChangeHandler}
                />
              </div>
              <div className="flex justify-between gap-3">
                <Label
                  className="text-[12px] text-muted-foreground flex-shrink-0"
                  htmlFor="name"
                >
                  Dish category
                </Label>
                <ComboboxDemo value={value} setValue={setValue}></ComboboxDemo>
              </div>

              <div className="flex justify-between gap-3">
                <Label
                  className="text-[12px] text-muted-foreground"
                  htmlFor="ingredients"
                >
                  Ingredients
                </Label>
                <Textarea
                  className="w-[288px]"
                  id="ingredients"
                  name="ingredients"
                  value={ingredients}
                  onChange={ingredientsChangeHandler}
                />
              </div>
              <div className="flex gap-3 justify-between">
                <Label
                  className="text-[12px] text-muted-foreground "
                  htmlFor="price"
                >
                  Price
                </Label>
                <Input
                  className="w-[288px]"
                  id="price"
                  name="price"
                  type="number"
                  value={price}
                  onChange={priceChangeHandler}
                />
              </div>
              <div>
                <div className=" justify-between flex gap-3">
                  <Label
                    className="text-[12px] text-muted-foreground"
                    htmlFor="picture"
                  >
                    Image
                  </Label>
                  <div className="min-w-[288px] min-h-[116px] max-w-[288px] rounded-[6px] max-h-[116px] relative">
                    {!checkImage && (
                      <img
                        className="w-full h-full object-cover overflow-hidden rounded-[6px]"
                        src={dish.imageUrl}
                        alt=""
                      />
                    )}
                    {!checkImage && (
                      <button
                        onClick={() => setCheckImage(true)}
                        className="w-[36px] h-[36px] absolute bg-white rounded-full top-2 right-2 flex items-center justify-center"
                      >
                        <X strokeWidth={1.25} />
                      </button>
                    )}
                  </div>
                </div>
                {checkImage && (
                  <Input
                    className="w-80"
                    id="picture"
                    type="file"
                    onChange={fileChangeHandler}
                  />
                )}
              </div>

              <Button
                type="submit"
                size={"sm"}
                className="w-fit px-4 py-[10px]"
                onClick={changeDishHandler}
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
