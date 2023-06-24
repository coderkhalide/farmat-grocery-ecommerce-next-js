import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReviewsCart from "./ReviewsCart";

function OfferZoneCart({ product }) {
  const {
    id,
    name,
    image,
    price,
    weight,
    oldPrice,
    reviewRating,
    totalReviews,
    delivery,
  } = product;

  return (
    <Link href={`/products`}>
      <div className="flex flex-row items-start cursor-pointer p-5 rounded hover:card-shadow transition-all duration-500 relative border border-gray-100 hover:border-gray-200 mx-auto bg-white gap-4">
        {/* Image */}
        <Image
          src={image}
          width={100}
          height={90}
          alt="img"
          objectFit="contain"
        />
        {/* Product Details */}
        <div className="flex flex-col gap-1 mt-2 w-full relative">
          <h3 className="text-lg font-bold text-title">{name}</h3>
          {reviewRating && (
            <ReviewsCart
              rating={reviewRating && reviewRating}
              totalReviews={totalReviews}
            />
          )}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1">
                <span
                  className={`text-xl font-bold ${
                    oldPrice ? "text-orange" : "text-green"
                  }`}
                >
                  ${price}
                </span>
                {oldPrice && (
                  <span className="text-base line-through text-gray-400">
                    ${oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default OfferZoneCart;
