import React from "react";
import { GoArrowRight } from "react-icons/go";
import { GrLineChart } from "react-icons/gr";
import { BsArrowsCollapseVertical } from "react-icons/bs";

const EventPopUp = () => {
  return (
    <div>
      <div
        className={`popup w-[23rem] h-[11rem] bg-white border-2 border-black absolute top-[5rem] right-[2.8rem] rounded-md px-8 z-10"
      }`}
      >
        <div className="w-full flex items-center py-4 gap-6">
          <div>
            <BsArrowsCollapseVertical className="bg-slate-100 hover:bg-orange-50 ... cursor-pointer w-[3rem] h-[3rem] py-2 rounded-md" />
          </div>
          <span>Full Stack Developer Program</span>
          <div>
            <GoArrowRight className="" />
          </div>
        </div>
        <div className="w-full flex justify-start items-center py-4 gap-6">
          <div>
            <GrLineChart className="bg-slate-100 hover:bg-orange-50 ... cursor-pointer w-[3rem] h-[3rem] py-2 rounded-md" />
          </div>
          <span>Data Science and Machine Learning Experts</span>
          <div>
            <GoArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopUp;
