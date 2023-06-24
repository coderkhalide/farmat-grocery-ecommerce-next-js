"use client";

import CheckoutContent from "@/components/checkout/CheckoutContent";
import Breadcrumb from "@/components/shared/Breadcrumb";
import React from "react";
import SecureLayout from "../SecureLayout";

const Checkout = () => {
  return (
    <SecureLayout>
      {/* <div className="bg-[#F5F5F5] p-5">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb />
        </div>
      </div> */}
      <div className="p-5 bg-bgGray">
        <div className="mx-auto max-w-[1180px] mt-10">
          <h1 className="text-4xl text-center text-title font-bold mb-10">
            Checkout
          </h1>
          <CheckoutContent />
        </div>
      </div>
    </SecureLayout>
  );
};

export default Checkout;
