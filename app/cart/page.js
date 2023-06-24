"use client";

import CartActions from "@/components/cart/CartActions";
import CartTable from "@/components/cart/CartTable";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { selectItems } from "@/redux/slices/basketSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector(selectItems);

  return (
    <main>
      <div className="bg-[#F5F5F5] p-5">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb />
        </div>
      </div>
      <div className="p-5">
        <div className="mx-auto max-w-5xl mt-10">
          <h1 className="text-4xl text-center text-title font-bold mb-10">
            Cart
          </h1>
          {cartItems.length > 0 ? (
            <>
              <CartTable />
              <CartActions />
            </>
          ) : (
            <>
              <img
                src="/images/empty.gif"
                loading="lazy"
                alt=""
                className="mx-auto w-1/3"
              />
              <h2 className="text-center text-2xl font-bold my-5">
                Your cart is empty ＞﹏＜
              </h2>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Cart;
