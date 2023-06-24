import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { selectItems, selectTotalPrice } from "../../redux/slices/basketSlice";

const YourOrder = ({ placeOrder, loading }) => {
  const cartItems = useSelector(selectItems);
  const cartTotal = useSelector(selectTotalPrice);

  return (
    <div className="">
      <div className="bg-gray-100 p-5 rounded-md">
        <div className="space-y-3 mb-4">
          {cartItems.map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="relative rounded-md border">
                  <Image
                    src={item.image}
                    alt="product"
                    width="75"
                    height="75"
                    className="rounded-md border"
                  />
                  <span className="bg-gray-500 w-5 h-5 text-xs text-white rounded-full absolute -top-2 -right-2 z-50 flex items-center justify-center">
                    {item?.quantity}
                  </span>
                </div>
                <h2 className="text-base font-semibold">{item?.name} </h2>
              </div>
              <h2 className="text-base font-medium text-color ml-2">
                ${item?.price}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 my-2">
          <input
            type="text"
            placeholder="Discount code"
            className="outline-none border rounded-md py-4 px-4 bg-white w-full"
          />
          <button className="outline-none border-none rounded-md bg-gray-500 text-white py-4 px-4">
            Apply
          </button>
        </div>
        <div className="flex justify-between py-5 border-b">
          <h2 className="text-base font-bold">Subtotal</h2>
          <h2 className="text-base font-bold text-green">${cartTotal}</h2>
        </div>
        <div className="py-5 border-b space-y-3 flex items-center justify-between">
          <span className="text-title">Shipping</span>
          <span className="text-title">Enter Shipping Address</span>
        </div>
        <div className="flex justify-between py-5 border-b">
          <h2 className="text-lg font-bold">Total</h2>
          <h2 className="text-lg font-bold text-green">${cartTotal}</h2>
        </div>
      </div>
      {/* <FormBtn
                title="Place Order"
                onClick={placeOrder}
                loading={loading}
            /> */}
    </div>
  );
};

export default YourOrder;
