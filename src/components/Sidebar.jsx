import React from "react";
import {
  Calendar,
  MousePointerClick,
  Hand,
  CircleDollarSign,
  Folder,
  Folders,
  BarChart,
  SquarePen,
  ArrowRightLeft,
  ChevronsUpDown,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-[33%] xl:w-[25%] space-y-7 pt-12 pl-12 lg:pl-16 xl:pl-20 max-md:hidden">
      <div className="flex items-center space-x-3 lg:space-x-5">
        <img
          src="https://res.cloudinary.com/dxaovcjmr/image/upload/v1711998821/profile_molaq6.jpg"
          alt="Logo"
          className="h-14 rounded-full border-2 border-black"
        />
        <div>
          <p className="font-medium text-lg lg:text-xl">Suraj Talreja</p>
          <p className="text-gray-500 text-sm lg:text-base">
            surajvtalreja@gmail.com
          </p>
        </div>
        <ChevronsUpDown color="black" size={20} />
      </div>
      <div className="">
        <div className="bg-white px-4 py-2 border-2 rounded-lg w-auto mb-2 flex items-center justify-center space-x-2">
          <ArrowRightLeft size={14} color="grey" />
          <p className="text-[0.7rem] md:text-sm lg:text-base">
            Switch Organisation
          </p>
        </div>
        <div className="bg-white px-4 py-2 border-2 rounded-lg w-full flex items-center justify-center space-x-2">
          <SquarePen size={12} color="grey" />
          <p className="text-sm lg:text-base">Edit Profile</p>
        </div>
      </div>
      <div>
        <ul className="space-y-4 w-full">
          <div className="flex space-x-3 items-center p-2">
            <Calendar color="grey" />
            <p className="font-normal text-sm md:text-base text-gray-600">
              My Calendar
            </p>
          </div>
          <div className="flex space-x-3 items-center bg-gray-300 p-2 rounded-md w-full">
            <MousePointerClick color="grey" />
            <p className="font-normal text-sm md:text-base text-gray-600">
              My Bookings
            </p>
          </div>
          <div className="flex space-x-3 items-center p-2">
            <Hand color="grey" />
            <p className="font-normal text-sm md:text-base text-gray-600">
              Attendance History
            </p>
          </div>
          <div className="flex space-x-3 items-center p-2">
            <CircleDollarSign color="grey" />
            <p className="font-normal text-sm md:text-base text-gray-600">
              Billing History
            </p>
          </div>
          <div className="flex space-x-3 items-center p-2">
            <Folder color="grey" />
            <p className="font-normal text-sm md:text-base text-gray-600">
              My Files
            </p>
          </div>
          <div className="flex space-x-3 items-center p-2">
            <Folders color="grey" />
            <p className="font-normal text-sm md:text-base text-gray-600">
              My Courses
            </p>
          </div>
          <div className="flex space-x-3 items-center p-2">
            <BarChart color="grey" />
            <p className="font-normal text-sm md:text-base text-gray-600">
              Grades
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
