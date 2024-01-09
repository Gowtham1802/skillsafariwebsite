import React from "react";
import { GoArrowRight } from "react-icons/go";
import { GrLineChart } from "react-icons/gr";
import { BsArrowsCollapseVertical } from "react-icons/bs";

const InternshipPopUp = ({ isOut }) => {
  return (
    <div>
      {isOut && (
        <div
          className={`popup w-[23rem] h-[11rem] bg-white border-2 border-black absolute top-[6rem] right-[26.5rem] rounded-md px-8 z-10"
      }`}
        >
          <div className="w-full flex items-center py-4 gap-6">
            <div>
              <BsArrowsCollapseVertical className="bg-slate-100 hover:bg-orange-50 ... cursor-pointer w-[3rem] h-[3rem] py-2 rounded-md" />
            </div>
            <span>Web Developer </span>
            <div>
              <GoArrowRight className="" />
            </div>
          </div>
          <div className="w-full flex justify-start items-center py-4 gap-6">
            <div>
              <GrLineChart className="bg-slate-100 hover:bg-orange-50 ... cursor-pointer w-[3rem] h-[3rem] py-2 rounded-md" />
            </div>
            <span>Data Analyst</span>
            <div>
              <GoArrowRight />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipPopUp;
