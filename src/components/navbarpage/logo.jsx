import { useState } from "react";
import JobPopUp from "./popup1";
import InternshipPopUp from "./popup2";
import EventPopUp from "./popup3";
import { FaCaretDown } from "react-icons/fa6";
import { img } from "../../../src/components/navbarpage/img/logo-black.png";
const LogoPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isOut, setIsOut] = useState(false);

  const toggleDropdown1 = () => {
    setIsOut(!isOut);
  };

  const [isOn, setIsOn] = useState(false);

  const toggleDropdown2 = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="">
      <nav className="w-full h-[8rem] flex justify-around items-center bg-white shadow-lg shadow-gray-500/50 ... ">
        <div className="">
          <img
            className="w-[14rem] h-[2rem] mr-40 cursor-pointer"
            src={img}
            alt="logo"
          />
        </div>
        <div
          className="text-xl   font-medium hover:text-yellow-400 ... cursor-pointer"
          onClick={toggleDropdown2}
        >
          <span className="flex gap-1">
            Job Ready Program <FaCaretDown className="mt-1 text-[15px]" />
          </span>
        </div>
        <div className="text-xl font-medium hover:text-yellow-400 ... cursor-pointer">
          <span>Learning Hub</span>
        </div>
        <div
          className="text-xl font-medium hover:text-yellow-400 ... cursor-pointer"
          onClick={toggleDropdown1}
        >
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
        <div
          className="text-xl font-medium hover:text-yellow-400 ... cursor-pointer"
          onClick={toggleDropdown}
        >
          <span className="flex gap-1">
            Events <FaCaretDown className="mt-1 text-[15px]" />
          </span>
        </div>
      </nav>
      <div>
        <JobPopUp isOn={isOn}></JobPopUp>
      </div>
      <div>
        <InternshipPopUp isOut={isOut}></InternshipPopUp>
      </div>
      <div>
        <EventPopUp isOpen={isOpen}></EventPopUp>
      </div>
    </div>
  );
};

export default LogoPage;
