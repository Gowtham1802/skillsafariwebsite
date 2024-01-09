import React from "react";
import JobPopUp from "./popup1";
import InternshipPopUp from "./popup2";
import EventPopUp from "./popup3";
import { FaCaretDown } from "react-icons/fa6";
const LogoPage = () => {
  return (
    <div className="">
      <nav className="w-full h-[8rem] flex justify-around items-center bg-white shadow-lg shadow-gray-500/50 ... ">
        <div className="">
          <img
            className="w-[14rem] h-[2rem] mr-40 cursor-pointer"
            src="src/components/navbarpage/img/logo-black.png"
            alt="logo"
          />
        </div>
        <div className="text-xl   font-medium hover:text-yellow-400 ... cursor-pointer">
          <span className="flex gap-1">
            Job Ready Program <FaCaretDown className="mt-1 text-[15px]" />
          </span>
        </div>
        <div className="text-xl font-medium hover:text-yellow-400 ... cursor-pointer">
          <span>Learning Hub</span>
        </div>
        <div className="text-xl font-medium hover:text-yellow-400 ... cursor-pointer">
          <span className="flex gap-1">
            Internship Program <FaCaretDown className="mt-1 text-[15px]" />
          </span>
        </div>
        <div className="text-xl font-medium hover:text-yellow-400 ... cursor-pointer">
          <span>Hire from us</span>
        </div>
        <div className="text-xl font-medium hover:text-yellow-400 ... cursor-pointer">
          <span>Blog</span>
        </div>
        <div className="text-xl font-medium hover:text-yellow-400 ... cursor-pointer">
          <span className="flex gap-1">
            Events <FaCaretDown className="mt-1 text-[15px]" />
          </span>
        </div>
      </nav>
      <div>
        <JobPopUp></JobPopUp>
      </div>
      <div>
        <InternshipPopUp></InternshipPopUp>
      </div>
      <div>
        <EventPopUp></EventPopUp>
      </div>
    </div>
  );
};

export default LogoPage;
