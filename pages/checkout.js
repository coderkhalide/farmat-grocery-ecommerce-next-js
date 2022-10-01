import React from 'react'
import CheckoutContent from '../app/components/checkout/CheckoutContent'
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
          <CheckoutContent />
        </div>
      </div>
    </main>
  )
}

export default Checkout