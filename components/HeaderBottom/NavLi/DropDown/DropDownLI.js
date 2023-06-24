import React, { useEffect, useState } from "react";
import SUbli from "./SubLI/SUbli";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { features, services } from "@/components/data/dropDownData";

const DropDownLI = ({ name, href }) => {
  const [navToggle, setNavToggle] = useState(false);
  const [dropDownName, setDropDownName] = useState("");
  const [pages, setPages] = useState([]);

  useEffect(() => {
    dropDownName === "Find works" && setPages(services);
    dropDownName === "About" && setPages(features);
  }, [dropDownName]);

  return (
    <li
      className="group lg:py-[26px] cursor-pointer relative"
      onMouseEnter={() => setDropDownName(name)}
      onMouseLeave={() => setDropDownName("")}
      onClick={() => setNavToggle(!navToggle)}
    >
      <Link href={href}>
        <div className="flex gap-1 items-center lg:text-title text-sm font-medium lg:font-semibold lg:text-[15px] capitalize">
          {name}
          <IoIosArrowDown
            className="duration-300 ease-linear group-hover:rotate-180"
            size={17}
          />
        </div>
      </Link>
      {pages !== [] && <SUbli pages={pages} navToggle={navToggle} page />}
    </li>
  );
};

export default DropDownLI;
