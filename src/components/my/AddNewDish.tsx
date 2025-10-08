"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const AddNewDish = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div
            className="w-[270px] h-[241px]  border-dashed rounded-[20px] outline-offset-2 flex-col space-[6px] flex gap-5  border-1 border-[#EF4444] items-center justify-center
          "
          >
            <div className="bg-red-500 w-10 h-10  rounded-full text-white font-extralight text-center flex justify-center text-2xl">
              <h1 className="mt-[1px]">+</h1>
            </div>
            <h1 className="font-medium">
              Add new Dish to<p>Appetizers</p>
            </h1>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
