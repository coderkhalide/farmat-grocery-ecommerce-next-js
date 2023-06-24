import React from "react";
import Link from "next/link";

const NavLi = ({ name, href }) => {
  return (
    <li>
      <Link href={href}>
        <div className="lg:text-title text-sm font-medium lg:font-semibold lg:text-[15px]">
          {name}
        </div>
      </Link>
    </li>
  );
};

export default NavLi;
