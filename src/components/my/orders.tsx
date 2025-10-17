import { Truck } from "lucide-react";
import React from "react";

export const Orders = ({ handleClick, activeButton }: any) => {
  const isActive = activeButton === "Orders";

  return (
    <div>
      <button
        onClick={() => handleClick("Orders")}
        className={`gap-2 ${
          isActive ? "bg-black text-white" : "text-black bg-white"
        }  flex px-6  items-center w-[165px] rounded-3xl h-[40px] text-black font-medium`}
      >
        <Truck strokeWidth={1.25} />
        Orders
      </button>
    </div>
  );
};
