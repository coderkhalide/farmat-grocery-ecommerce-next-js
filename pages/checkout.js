import React from 'react'
import BillingInfo from '../app/components/checkout/BillingInfo'
import YourOrder from '../app/components/checkout/YourOrder'
import Breadcrumb from "../app/components/shared/Breadcrumb"

const Checkout = () => {
  return (
    <main>
      <div className="bg-[#F5F5F5] p-5">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb />
        </div>
      </div>
      <div className="p-5">
        <div className="mx-auto max-w-5xl mt-10">
          <h1 className="text-4xl text-center text-title font-bold mb-10">Checkout</h1>
          <div className="flex flex-wrap md:flex-nowrap gap-5">
            <div className="w-full md:w-[60%]">
              <BillingInfo />
            </div>
            <div className="w-full md:w-[40%]">
              <YourOrder />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Checkout