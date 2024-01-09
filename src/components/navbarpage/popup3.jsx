import React from "react";
import { GoArrowRight } from "react-icons/go";
import { GrLineChart } from "react-icons/gr";
import { BsArrowsCollapseVertical } from "react-icons/bs";

const EventPopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && (
        <div
          className={`popup w-[23rem] h-[15rem] bg-white border-2 border-black absolute top-[6rem] right-[2.8rem] rounded-md px-8 z-10"
      }`}
        >
          <div className="w-full flex items-center py-4 gap-6">
            <div>
              <BsArrowsCollapseVertical className="bg-slate-100 hover:bg-orange-50 ... cursor-pointer w-[3rem] h-[3rem] py-2 rounded-md" />
            </div>
            <span>Build a web developer portfolio</span>
            <div>
              <GoArrowRight className="" />
            </div>
          </div>
          <div className="w-full flex justify-start items-center py-4 gap-6">
            <div>
              <GrLineChart className="bg-slate-100 hover:bg-orange-50 ... cursor-pointer w-[3rem] h-[3rem] py-2 rounded-md" />
            </div>
            <span>Introduction to Data Analytics With MS Excel</span>
            <div>
              <GoArrowRight />
            </div>
          </div>
          <div className="w-full flex justify-start items-center py-4 gap-6">
            <div>
              <GrLineChart className="bg-slate-100 hover:bg-orange-50 ... cursor-pointer w-[3rem] h-[3rem] py-2 rounded-md" />
            </div>
            <span>Build a web developer portfolio offline</span>
            <div>
              <GoArrowRight />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPopUp;
