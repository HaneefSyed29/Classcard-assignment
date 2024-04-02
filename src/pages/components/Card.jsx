import React from "react";
import { Clipboard } from "lucide-react";
import { Download } from "lucide-react";
import { SquareCheck } from "lucide-react";
import { SquareX } from "lucide-react";

const Card = () => {
  return (
    <div className="py-6 mt-8 lg:w-[66%] w-[90%] md:mx-12 mx-auto">
      <p className="font-medium text-lg text-slate-700">My Bookings</p>
      <div className="mt-4 flex bg-white p-4 border-2 shadow-sm rounded-lg">
        <Clipboard
          className="bg-[#f2f4f6] p-1 sm:p-3 rounded-md"
          color="grey"
          size={32}
        />
        <div className="justify-between w-full ml-2 sm:ml-4 items-center">
          <div className="flex justify-between w-full items-center">
            <p className="font-medium text-[0.6rem] sm:text-sm lg:text-base">
              Graphic Design (full course)
            </p>
            <div className="space-x-2 flex mr-2">
              <button className="border-2 px-2 md:px-4 py-2  rounded-md flex space-x-2 items-center">
                <Download size={14} />
                <p className="text-[0.6rem] lg:text-sm">Invoice</p>
              </button>
              <button className="border-2 px-2 md:px-4 py-1 rounded-md flex space-x-2 items-center">
                <Download size={14} />
                <p className="text-[0.6rem] lg:text-sm">Receipt</p>
              </button>
            </div>
          </div>
          <div className="sm:flex py-4 space-x-0 space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <div className="space-y-1">
              <p className="text-[#6b727f] font-medium text-sm">Subject</p>
              <p className="text-[0.7rem] md:text-sm">
                Design for intermediates
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[#6b727f] font-medium text-sm">Sessions</p>
              <p className="text-[0.7rem] md:text-sm">10 sessions</p>
            </div>
            <div className="space-y-1">
              <p className="text-[#6b727f] font-medium text-sm">Invoice</p>
              <p className="text-[0.7rem] md:text-sm">13</p>
            </div>
            <div className="space-y-1">
              <p className="text-[#6b727f] font-medium text-sm">Valid till</p>
              <p className="text-[0.7rem] md:text-sm">Feb 15, 2024 (23 days)</p>
            </div>
          </div>
          <div className="w-full overflow-x-auto bg-[#f2f4f6] p-2 sm:p-3 space-y-2">
            <p className="text-sm sm:text-base">Balance 6</p>
            <div className="flex space-x-1 mt-2">
              <input
                type="checkbox"
                style={{ zoom: "1.5", borderColor: "grey" }}
              />
              <input type="checkbox" style={{ zoom: "1.6" }} />
              <input type="checkbox" style={{ zoom: "1.6" }} />
              <input type="checkbox" style={{ zoom: "1.6" }} />
              <input type="checkbox" style={{ zoom: "1.6" }} />
              <input type="checkbox" style={{ zoom: "1.6" }} />
              <input type="checkbox" style={{ zoom: "1.6" }} />
              <input type="checkbox" style={{ zoom: "1.6" }} />
              <input type="checkbox" style={{ zoom: "1.6" }} />
              <input type="checkbox" style={{ zoom: "1.6" }} />
            </div>
            <p className="text-sm sm:text-base">Scheduled 3</p>
            <div className="flex space-x-1 mt-2">
              <input type="checkbox" style={{ zoom: "1.6" }} />
              <input type="checkbox" style={{ zoom: "1.6" }} />
              <input type="checkbox" style={{ zoom: "1.6" }} />
            </div>
            <p className="text-green-600 text-sm sm:text-base">Attended 5</p>
            <div className="flex space-x-1 mt-2">
              <SquareCheck color="green" />
              <SquareCheck color="green" />
              <SquareCheck color="green" />
              <SquareCheck color="green" />
              <SquareX color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
