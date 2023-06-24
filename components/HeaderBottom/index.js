import React, { useEffect, useState } from "react";
import NavLi from "./NavLi/NavLi";
import DropDownLI from "./NavLi/DropDown/DropDownLI";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import navLinks from "../data/navbar";

const HeaderBottom = () => {
  const [open, setOpen] = useState(false);
  const [searchBackDrop, setSearchBackDrop] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const nav = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    // console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", nav);
    return () => {
      window.removeEventListener("scroll", nav);
    };
  }, []);
  return (
    <>
      {/* I can use sticky and top-0 */}
      <header className={`relative z-10 border-b border-[#ffffff24]`}>
        <nav className={`container`}>
          <div className="flex justify-between items-center w-full py-3 md:py-4 lg:py-0">
            {/* Logo */}
            <Link href="/" className="">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 32 32">
                  <path d="M8.8 32c-0.157 0-0.315-0.046-0.453-0.141-0.318-0.218-0.435-0.632-0.278-0.984l5.189-11.675h-7.658c-0.324 0-0.615-0.195-0.739-0.494s-0.055-0.643 0.173-0.872l16-16c0.273-0.273 0.701-0.312 1.019-0.094s0.435 0.632 0.278 0.984l-5.189 11.675h7.658c0.324 0 0.615 0.195 0.739 0.494s0.055 0.643-0.173 0.872l-16 16c-0.155 0.155-0.36 0.234-0.566 0.234zM7.531 17.6h6.957c0.271 0 0.523 0.137 0.671 0.364s0.17 0.513 0.060 0.761l-3.939 8.863 11.588-11.588h-6.958c-0.271 0-0.523-0.137-0.671-0.364s-0.17-0.513-0.060-0.761l3.939-8.863-11.588 11.588z"></path>
                </svg>
                <p className="font-medium lg:font-semibold text-sm lg:text-title lg:text-[15px] capitalize">
                  Deals Today
                </p>
              </div>
            </Link>
            {/* Menu */}
            <div
              className="menu lg:hidden cursor-pointer"
              onClick={() => setOpen((x) => !x)}
            >
              <HiOutlineMenuAlt3 size={40} className="text-navTextColor" />
            </div>

            {/* NavList */}
            <div
              className={`${
                !open &&
                "fixed bg-teal-700 !left-[-350px] lg:!left-0 transition-all lg:!transition-none !duration-[350ms] ease-in-out lg:!duration-[0ms] !z-[1090]"
              } fixed top-0 left-0 bg-white lg:relative lg:top-0 !z-[1100] lg:justify-between w-[350px] h-screen lg:h-auto flex-col flex lg:flex lg:w-auto lg:bg-transparent transition-all duration-[400ms] lg:!transition-none ease-in lg:!duration-[0ms] overflow-y-scroll lg:!overflow-y-visible no-scrollbar`}
            >
              {/* ==== Menu Close Icon & Menu Logo for mobile ==== */}
              <div className="flex lg:hidden pt-10 pb-8 px-8 justify-end items-center">
                {/* <img
                  src="/icons/footer-logo.png"
                  className="w-32 object-contain"
                /> */}
                <div
                  className="cursor-pointer text-colorText lg:hidden flex justify-end p-3 bg-colorSecondary rounded-full"
                  onClick={() => setOpen(false)}
                >
                  <AiOutlineClose size={18} className="text-navTextColor" />
                </div>
              </div>
              {/* Nav Menu */}
              <div className={`nav-menu flex items-center lg:gap-24`}>
                <ul className="main-menu pl-8 lg:pl-0 flex-col lg:flex-row lg:flex lg:items-center lg:flex-wrap lg:gap-10 space-y-8 lg:space-y-0">
                  {navLinks.map((nav) => (
                    <div key={nav.name}>
                      {!nav.dropDown ? (
                        <NavLi {...nav} />
                      ) : (
                        <DropDownLI {...nav} />
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recent view */}
            <Link href="/" className="">
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    className="path1"
                    d="M1016.501 442.698c-9.997-9.997-26.206-9.997-36.203 0l-58.832 58.832c-2.63-105.486-44.947-204.27-119.835-279.16-77.362-77.365-180.222-119.97-289.63-119.97-152.28 0-291.122 83.699-362.342 218.435-6.606 12.499-1.83 27.989 10.669 34.597 12.498 6.606 27.989 1.83 34.597-10.669 62.33-117.914 183.826-191.163 317.077-191.163 194.014 0 352.501 154.966 358.224 347.619l-58.522-58.522c-9.997-9.997-26.206-9.997-36.203 0-9.998 9.998-9.998 26.206 0 36.205l102.4 102.4c4.998 4.998 11.549 7.498 18.101 7.498s13.102-2.499 18.101-7.499l102.4-102.4c9.998-9.997 9.998-26.205 0-36.203z"
                  ></path>
                  <path
                    className="path2"
                    d="M863.674 668.566c-12.502-6.603-27.99-1.832-34.597 10.669-62.328 117.915-183.826 191.165-317.077 191.165-194.016 0-352.502-154.966-358.224-347.621l58.522 58.522c5 5 11.55 7.499 18.102 7.499s13.102-2.499 18.102-7.499c9.997-9.997 9.997-26.206 0-36.203l-102.4-102.4c-9.998-9.997-26.206-9.997-36.205 0l-102.4 102.4c-9.997 9.997-9.997 26.206 0 36.203s26.206 9.997 36.205 0l58.83-58.832c2.63 105.488 44.946 204.272 119.835 279.162 77.365 77.363 180.224 119.97 289.632 119.97 152.28 0 291.12-83.699 362.342-218.435 6.608-12.501 1.829-27.99-10.669-34.598z"
                  ></path>
                </svg>
                <p className="font-medium lg:font-semibold text-sm lg:text-title lg:text-[15px] capitalize">
                  Recently viewed
                </p>
              </div>
            </Link>
          </div>
        </nav>

        {/* Animation backDrop */}
        <div
          className={`${
            searchBackDrop &&
            "bg-popUpBg fixed top-0 left-0 w-full h-full z-[999] !opacity-80 overflow-hidden pb-[100%] rounded-full animate-backDrop hidden lg:block"
          }`}
        ></div>

        {/* BackDrop */}
        <div
          className={`${
            !searchBackDrop
              ? "absolute hidden lg:block lg:top-[-1080px] top-0 lg:!duration-[0ms] z-[995] delay-[0ms]"
              : "lg:absolute hidden lg:block lg:top-0 lg:left-0 relative top-0 z-[1000] w-screen h-screen lg:duration-[1200ms] ease-in-out delay-300"
          }`}
          onClick={() => setSearchBackDrop(false)}
        >
          <div className="w-full h-screen flex items-center justify-center">
            <div
              className="w-1/2 py-2 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-8 pr-12 py-6 rounded-xl bg-popUpBg !opacity-50 border border-blue-700 text-navTextColor"
              />
              <BiSearch
                size={25}
                className="text-navTextColor cursor-pointer absolute top-1/2 -translate-y-1/2 right-4"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderBottom;
