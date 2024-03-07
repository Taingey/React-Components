import React from "react";
import User from "../Images/user.jpg";
export const Header = () => {
  return (
    <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
      <div className="flex flex-shrink-0 items-center space-x-4 text-white">
        <div className="flex flex-col items-end ">
          <div className="text-md font-medium tracking-wide">Ly Taing Ey</div>
          <div className="text-sm font-regular tracking-widest">CSTAD</div>
        </div>
        <img
          src={User}
          alt="Logo"
          className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"
        />
      </div>
    </header>
  );
};
