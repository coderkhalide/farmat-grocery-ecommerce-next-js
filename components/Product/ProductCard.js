"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, selectItems } from "@/redux/slices/basketSlice";
import ReviewsCart from "./ReviewsCart";
import { useState } from "react";

const exists = false;

const ProductCard = ({ product }) => {
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
  const cartItems = useSelector(selectItems);
  const dispatch = useDispatch();
  const [hoverId, setHoverId] = useState(null);

  const OffCalc = () => {
    const off = ((oldPrice - price) / oldPrice) * 100;
    return Math.round(off);
  };

  const checkItemExists = (id) => {
    const find = cartItems.filter((item) => item.id === id);
    return !!find.length;
  };

  const addToBasket = (product) => {
    dispatch(
      addItem({
        ...product,
        quantity: 1,
      })
    );
  };
  const removeItemFromCart = () => {
    dispatch(removeItem(id));
  };

  return (
    <Link href={`/products`}>
      <div
        onMouseEnter={() => setHoverId(id)}
        onMouseLeave={() => setHoverId(null)}
        className="product-card bg-white"
      >
        {oldPrice && (
          <span className="bg-orange text-white text-xs px-2 py-1 rounded-md absolute top-5 left-5 z-10">
            {OffCalc()}% OFF
          </span>
        )}
        {delivery && (
          <div className="bg-black text-white text-xs px-2 py-1 rounded-md absolute top-0 right-0 z-10">
            {delivery}
          </div>
        )}
        {/* Image */}
        <Image
          src={image}
          width={265}
          height={270}
          alt="img"
          objectFit="contain"
        />
        {/* Product Details */}
        <div className="flex flex-col gap-1 mt-2 w-full relative">
          {/* Laptop add to cart */}
          {hoverId === id && (
            <div className="hidden sm:block">
              {checkItemExists(id) ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    removeItemFromCart();
                  }}
                  className="absolute -top-9 left-0 w-full bg-orange opacity-90 z-50 text-white uppercase py-2 px-3 text-center text-sm font-semibold"
                >
                  Added
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    addToBasket(product);
                  }}
                  className="absolute -top-9 left-0 w-full bg-orange opacity-90 z-50 text-white uppercase py-2 px-3 text-center text-sm font-semibold"
                >
                  Add To Cart
                </button>
              )}
            </div>
          )}
          <h3 className="text-lg font-bold text-title truncate">{name}</h3>
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
            {/* mobile add to cart */}
            <div className="block sm:hidden">
              {checkItemExists(id) ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    removeItemFromCart();
                  }}
                  className="bg-primary text-white rounded-full w-10 h-10 flex justify-center items-center"
                >
                  <BsFillCartCheckFill size={16} />
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    addToBasket(product);
                  }}
                  className="bg-gray-600 text-white rounded-full w-10 h-10 flex justify-center items-center"
                >
                  <FaCartPlus size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
