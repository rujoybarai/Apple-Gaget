import React from "react";
import { ShoppingCart } from "lucide-react";
import { CircleUser } from "lucide-react";

export default function Navber() {
  return (
    <div className="lg:w-screen lg:min-h-20 border-2 bg-black flex items-center flex-wrap justify-center lg:justify-evenly ">
      <div className="lg:w-1/4 lg:h-16 w-full h-12 text-amber-50 font-bold lg:text-3xl text-2xl text-center mt-3">
        Apple <span className="text-amber-600">Gaget</span>
      </div>
      <div className="lg:w-1/3 lg:h-12 w-[70%] h-10">
        <input
          type="text"
          placeholder="Enter....."
          className="w-full h-full rounded-4xl  bg-gray-500 border-none outline-none px-8 text-lg text-white"
        />
      </div>
      <div className="lg:w-1/3 lg:h-12 w-full h-12 ">
        <ul className="w-full h-full flex items-center justify-evenly gap-0 text-white font-semibold  ">
          <li className="cursor-pointer ">Shop</li>
          <li className="cursor-pointer ">Pre-order</li>
          <li className="cursor-pointer ">Offers</li>
          <li className="flex gap-0.5 items-center relative cursor-pointer ">
            <ShoppingCart size={20} strokeWidth={1.5} />
            Cart{" "}
            <span className=" text-rose-600 rounded-full flex items-center justify-center absolute -top-3 right-9 ">
              0
            </span>
          </li>
          <li className="flex gap-0.5 cursor-pointer ">
            <CircleUser size={30} strokeWidth={1.5} />
          </li>
        </ul>
      </div>
    </div>
  );
}
