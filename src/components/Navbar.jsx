import React from "react";
import { MessageCircleMore, ShoppingCart, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="px-8 sm:px-24 shadow-sm bg-white">
      <div className="py-5 flex justify-between border-b-2 border-[#e5e7eb]">
        <img
          src="https://res.cloudinary.com/dxaovcjmr/image/upload/v1711961066/Logo_obvi5a.png"
          alt="Logo"
        />
        <div>
          <ul className="space-x-4 flex items-center">
            <MessageCircleMore color="grey" />
            <ShoppingCart color="grey" />
            <img
              src="https://res.cloudinary.com/dxaovcjmr/image/upload/v1711998821/profile_molaq6.jpg"
              className="h-9 rounded-full"
            />
            <p className="font-medium text-gray-700 text-base">Tom Cook</p>
            <ChevronDown color="grey" />
          </ul>
        </div>
      </div>
      <ul className="py-5 flex space-x-3 sm:space-x-12 text-gray-500 font-medium items-center">
        <li className="text-sm md:text-base">Classes</li>
        <li className="text-sm md:text-base">One-on-One</li>
        <li className=" bg-slate-100 p-2 px-2 text-sm md:text-base rounded-md text-black">
          Packages
        </li>
        <li className="text-sm md:text-base">Courses</li>
      </ul>
    </div>
  );
};

export default Navbar;
