import React from "react";
import Link from "next/link";

const SUbli = ({ pages, navToggle, page }) => {
  // when need text content width lg:w-max
  return (
    <div
      className={`lg:w-[150px] lg:absolute lg:top-[72px] lg:right-1/2 lg:translate-x-1/2 lg:opacity-0 lg:invisible lg:rounded-b-lg lg:duration-700 lg:ease-in-out lg:origin-top lg:scale-y-0 lg:group-hover:visible lg:group-hover:opacity-100 lg:group-hover:scale-y-100 lg:bg-white lg:shadow relative w-full opacity-100 visible scale-y-100 hidden lg:!block ${
        page && navToggle ? "!block" : ""
      } `}
    >
      <div className="flex flex-col gap-2 lg:gap-0 lg:flex-none lg:py-4 pt-4 px-2">
        {pages.map((menu) => {
          return (
            <div
              key={menu.id}
              className="hover:bg-colorPrimary rounded-md transition-all"
            >
              <Link href="#">
                <div className="lg:font-normal p-3 hover:text-navTextColor text-colorSecondary lg:text-colorPrimary font-RadHatText text-sm font-medium lg:text-[15px]">
                  {menu.text}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SUbli;
