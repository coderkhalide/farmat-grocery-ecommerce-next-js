import Image from "next/image";
import Link from "next/link";
import React from "react";

function Category({ category, image, id }) {
  return (
    <Link href="/">
      <div className="category-card bg-white">
        <div className="w-[120px] h-[120px] rounded-full border flex items-center justify-center mb-5">
          <Image
            src={image}
            width={90}
            height={90}
            alt="img"
            objectFit="contain"
          />
        </div>
        <h3 className="text-color font-medium text-center">{category}</h3>
      </div>
    </Link>
  );
}

export default Category;
