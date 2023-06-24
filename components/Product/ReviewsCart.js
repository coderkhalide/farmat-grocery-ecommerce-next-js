import React from "react";
import ReactStars from "react-rating-stars-component";
import { AiOutlineMessage } from "react-icons/ai";

const firstExample = {
  size: 20,
  isHalf: true,
  edit: false,
  activeColor: "#000",
  color: "#efefef",
  classNames: "top-reviews-icon",
};

function ReviewsCart({ rating = "4.5", totalReviews }) {
  return (
    <div className="flex items-center gap-2">
      <ReactStars {...firstExample} value={rating} />
      <h3 className="text-color font-medium">{totalReviews} reviews |</h3>
      <AiOutlineMessage size={20} className="text-color" />
    </div>
  );
}

export default ReviewsCart;
