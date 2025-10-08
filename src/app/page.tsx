"use client";
import { Category, ProductsList } from "@/components/my";
import { AdminLayout } from "./_components/AdminLayout";
import { Header } from "./_components/Header";

export default function Home() {
  return (
    <AdminLayout>
      <div className="h-fit w-100vw bg-accent ml-[24px] mr-10">
        <div className="flex justify-end mt-5">
          <Header></Header>
        </div>
        <Category></Category>
        <ProductsList></ProductsList>
      </div>
    </AdminLayout>
  );
}
