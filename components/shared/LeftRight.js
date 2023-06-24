"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Slider Left Right
const LeftRight = ({ leftClick, rightClick, className }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={leftClick}
        className={`bg-white w-7 h-7 flex items-center justify-center rounded ${className}`}
      >
        <IoIosArrowBack size={18} className={`text-[#757575]`} />
      </button>
      <button
        onClick={rightClick}
        className={`bg-white w-7 h-7 flex items-center justify-center rounded ${className}`}
      >
        <IoIosArrowForward size={18} className="text-[#757575]" />
      </button>
    </div>
  );
};

export default LeftRight;
