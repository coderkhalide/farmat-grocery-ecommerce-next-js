import React from "react";
// import BillingDetailsForm from './BillingDetailsForm'
const paymentMethods = [
  { type: "Cash on Delivery", name: "Cash on Delivery" },
  { type: "mobile banking", name: "bKash" },
];

const BillingInfo = () => {
  return (
    <form>
      <div className="input-1 mb-10">
        <h3 className="text-title font-semibold text-base mb-4">
          What's your name?
        </h3>
        <input
          type="text"
          className="border-b-2 w-full py-2 border-color outline-none bg-bgGray"
          placeholder="Enter here"
          required
        />
      </div>

      <div className="input-1 mb-10">
        <h3 className="text-title font-semibold text-base mb-4">
          What's your phone number?
        </h3>
        <input
          type="text"
          className="border-b-2 w-full py-2 border-color outline-none bg-bgGray"
          placeholder="018XX-XXXXXX"
          required
        />
      </div>
      <div className="input-1 mb-10">
        <h3 className="text-title font-semibold text-base mb-4">
          Write your Email?
        </h3>
        <input
          type="email"
          className="border-b-2 w-full py-2 border-color outline-none bg-bgGray"
          placeholder="Enter your Email"
          required
        />
      </div>

      <div className="input-1 mb-10">
        <h3 className="text-title font-semibold text-base mb-4">
          What's the delivery address?
        </h3>
        <input
          type="text"
          className="border-b-2 w-full py-2 border-color outline-none bg-bgGray"
          placeholder="Enter here"
          required
        />
      </div>
      {/* Payment method */}
      <div className="input-1 mb-10">
        <h3 className="text-title font-semibold text-base mb-4">
          And finally, how would you like to pay?
        </h3>
        <div className="payment flex flex-col gap-3">
          {paymentMethods.map((paymentMethod) => (
            <div
              key={paymentMethod.name}
              className="text-title font-semibold text-base bg-white shadow rounded py-2 px-3 cursor-pointer"
            >
              {paymentMethod.name}
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="outline-none border-none rounded bg-primary py-2 px-4 text-center text-lg font-semibold w-full cursor-pointer"
      >
        Confirm Order
      </button>
    </form>
  );
};

export default BillingInfo;
