import Image from "next/image";
import Link from "next/link";
import React from "react";

function BrandCart({ brand, image, id }) {
  return (
    <Link href="/">
      <div className=" bg-white">
        <div className="flex items-center justify-center mb-5">
          <Image
            src={image}
            width={140}
            height={90}
            alt="img"
            objectFit="contain"
          />
        </div>
      </div>
    </Link>
  );
}

export default BrandCart;
