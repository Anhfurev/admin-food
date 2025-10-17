"use client";
import { Category, ProductsList } from "@/components/my";
import { AdminLayout } from "./_components/AdminLayout";
import { Header } from "./_components/Header";
import { useEffect, useState } from "react";
type FoodType = {
  _id?: string;
  name: string;
  price: number;
  ingredients: string;
  imageUrl: string;
  categoryId: string;
};

export default function Home() {
  useEffect(() => {
    getDishDatas();
  }, []);
  const [datasOfDish, setDatasOfDish] = useState<FoodType[]>([]);
  const getDishDatas = async () => {
    const result = await fetch("http://localhost:4000/api/food");
    const responseDatas = await result.json();
    console.log(responseDatas);
    setDatasOfDish(responseDatas.foods);
  };

  return (
    <AdminLayout>
      <div className="max-w-[100vw] w-100vw bg-accent ml-[24px] mr-10 ">
        <div className="flex justify-end mt-40 bg-accent  mr-10">
          <Header></Header>
        </div>
        <div>
          <div className="mt-43 ml-50">
            <ProductsList
              setDatasOfDish={setDatasOfDish}
              datasOfDish={datasOfDish}
              getDishDatas={getDishDatas}
            ></ProductsList>
            <ProductsList
              setDatasOfDish={setDatasOfDish}
              datasOfDish={datasOfDish}
              getDishDatas={getDishDatas}
            ></ProductsList>
            <ProductsList
              setDatasOfDish={setDatasOfDish}
              datasOfDish={datasOfDish}
              getDishDatas={getDishDatas}
            ></ProductsList>
            <ProductsList
              setDatasOfDish={setDatasOfDish}
              datasOfDish={datasOfDish}
              getDishDatas={getDishDatas}
            ></ProductsList>
            <ProductsList
              setDatasOfDish={setDatasOfDish}
              datasOfDish={datasOfDish}
              getDishDatas={getDishDatas}
            ></ProductsList>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
