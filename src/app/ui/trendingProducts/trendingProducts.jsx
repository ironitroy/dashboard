"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { MdOutlineArrowForwardIos,MdOutlineArrowBackIosNew } from "react-icons/md";
import { HiOutlinePlus,HiOutlineMinus } from "react-icons/hi";
import { useState } from "react";
import { IoHeartSharp } from "react-icons/io5";



const TrendingProducts = () => {

    const products = [
        {
            productName:"Test Product",
            stock:14,
            price:200,
            images:["/wool.jpg"],
            desc:"",
            category:"Yarn"
        },
        {
            productName:"Test Product2",
            stock:14,
            price:200,
            images:["/wool.jpg"],
            desc:"",
            category:"Yarn"
        },
        {
            productName:"Test Product 3",
            stock:14,
            price:200,
            images:["/wool.jpg"],
            desc:"",
            category:"Yarn"
        },
        {
            productName:"Test Product 4",
            stock:14,
            price:200,
            images:["/wool.jpg"],
            desc:"",
            category:"Yarn"
        },
        {
            productName:"Test Product 5",
            stock:14,
            price:200,
            images:["/wool.jpg"],
            desc:"",
            category:"Yarn"
        }
    ]
        // {
        //     productName:"Test Product 2",
        //     stock:14,
        //     price:200,
        //     images:["/wool.jpg"],
        //     desc:""
        // },
        // {
        //     productName:"Test Product 3",
        //     stock:14,
        //     price:200,
        //     images:["/wool.jpg"],
        //     desc:""
        // },
        // {
        //     productName:"Test Product 4",
        //     stock:14,
        //     price:200,
        //     images:["/wool.jpg"],
        //     desc:""
        // },
        // {
        //     productName:"Test Product 5",
        //     stock:14,
        //     price:200,
        //     images:["/wool.jpg"],
        //     desc:""
        // },
        
        const [stock, setStock] = useState(0)

        const addmore = () => { 
            setStock(stock + 1);
        }

        const decrement = () => {
            setStock(stock > 0 ? stock - 1 : 0);
          };
    
  return (
    <div className="grid justify-center">
        <div className="flex justify-between bg-blue-100 px-8 py-4 rounded-xl mb-10">
            <div className=" text-xl">

            Trending Products
            </div>
            <div className="flex gap-2">
                <button className="">
                <MdOutlineArrowBackIosNew className="size-5"/>
                </button>
                <button className="">
                <MdOutlineArrowForwardIos className="size-5"/>
                </button>
            </div>
        </div>

        <div className=" pt-2 pb-6  gap-6 flex overflow-scroll">
        {/* <div className=" pt-2 pb-6  grid  sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10"> */}
        {products.map((product) => (
        <Card
            className="min-w-[350px] overflow-hidden h-fit p-2 rounded-[24px] transition duration-300 ease-in-out hover:scale-[102%] bg-gradient-to-b from-transparent to-blue-100"
            key={product._id}
          >  
          <div className="relative">
              <Image
                src={product.images ? product.images[0] : "/Frame.svg" }
                alt="Product Image"
                width="300"
                height="300"
                className="w-full  inner-shadow rounded-[16px] aspect-[5/3] object-cover"
              />

              <button className=" bg-white rounded-full p-2 absolute top-4 right-4"><IoHeartSharp className="size-5 text-rose-500"/></button>
        </div>  
         
            <div className="pt-4 pb-2 px-2 flex flex-col gap-2">
              <div className="flex justify-between items-center gap-4">
                <CardTitle className="leading-snug font-medium line-clamp-1 text-lg select-none text-gray-700">
                  {product.productName}
                </CardTitle>
              </div>
              <div className="flex justify-between items-center gap-1.5">
                {/* <CardDescription >Deploy your new project in one-click.</CardDescription> */}
                {/* <Badge
                  className={`w-fit text-nowrap shadow-sm shadow-gray-200  font-normal ${
                    products.category === "Wool"
                      ? "bg-lime-200 hover:border-lime-300 hover:bg-lime-300 text-gray-900 "
                      : products.category === "Website Development"
                      ? "bg-emerald-200 hover:border-emerald-300 hover:bg-emerald-300 text-gray-900 "
                      : products.category === "SEO"
                      ? "bg-amber-200 hover:border-amber-300 hover:bg-amber-300 text-gray-900 "
                      : products.category === "Social Media"
                      ? "bg-cyan-200 hover:border-cyan-300 hover:bg-cyan-300 text-gray-900 "
                      : products.category === "Graphics Design"
                      ? "bg-fuchsia-200 hover:border-fuchsia-300 hover:bg-fuchsia-300 text-gray-900 "
                      : ""
                  }`}
                >
                  {products.category}
                </Badge> */}

                {/* <p className="text-sm text-gray-600/90 hover:text-gray-800/90 font-normal flex items-center gap-1 cursor-pointer">
                  View Project{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </p> */}

                <h3 className=" text-xl font-medium">{product.price}</h3>

                <div className="flex justify-between items-center border border-gray-900 rounded-xl w-24 px-2 py-0.5">
                    <button className="cursor-pointer text-gray-500" onClick={decrement}><HiOutlineMinus /></button>
                    <div className="text-base">{stock}</div>
                    <button className="cursor-pointer text-gray-500" onClick={addmore}><HiOutlinePlus /></button>
                </div>

              </div>

              <Button className="border border-blue-900 rounded-xl bg-transparent text-blue-900 text-base">
                Add to cart
              </Button>
            </div>
          </Card>))}
        </div>
        <button className="bg-gray-800 text-white rounded-xl px-6 py-2 mx-auto text-sm mt-6">
            View All Products
        </button>
    </div>
  )
}

export default TrendingProducts