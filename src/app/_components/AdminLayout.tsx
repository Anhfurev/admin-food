import React from "react";
import { ReactNode } from "react";
import { SideBar } from "./SideBar";
import { Header } from "./Header";

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="w-full bg-accent">{children}</div>
    </div>
  );
};
