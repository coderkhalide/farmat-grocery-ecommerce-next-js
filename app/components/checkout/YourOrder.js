import React from 'react'
import Button from '../shared/Button'
import { FormBtn } from '../shared/Form'

const YourOrder = ({ placeOrder }) => {

    return (
        <div>
            <h3 className="text-2xl mb-4">Your order</h3>
            <div className="bg-gray-100 p-5 rounded-md">
                <div className="flex justify-between pb-5 border-b">
                    <h2 className="text-base font-bold">PRODUCT</h2>
                    <h2 className="text-base font-bold">TOTAL</h2>
                </div>
                <div className="space-y-3 bg-white">
                    <div className="flex justify-between py-5 px-5 border-b">
                        <h2 className="text-base font-medium">Soft Mochi & Galeto Ice Cream  <span className="text-gray-400">(x2)</span></h2>
                        <h2 className="text-base font-bold ml-2">$41.39</h2>
                    </div>
                    <div className="flex justify-between py-5 px-5 border-b">
                        <h2 className="text-base font-medium">Taylors of Harrogate Yorkshire Coffee   <span className="text-gray-400">(x1)</span></h2>
                        <h2 className="text-base font-bold ml-2">$10.50</h2>
                    </div>
                    <div className="flex justify-between py-5 px-5 border-b">
                        <h2 className="text-base font-medium">Vimto Squash Remix Apple 1.5 Litres <span className="text-gray-400">(x1)</span></h2>
                        <h2 className="text-base font-bold ml-2">$6.90</h2>
                    </div>
                </div>
                <div className="flex justify-between py-5 border-b">
                    <h2 className="text-base font-bold">Subtotal</h2>
                    <h2 className="text-base font-bold text-green">$59.38</h2>
                </div>
                <div className="py-5 border-b space-y-3">
                    <span className="text-title">Shipping</span>
                    <ul className="">
                        <li className="">- Flat rate</li>
                    </ul>
                </div>
                <div className="flex justify-between py-5 border-b">
                    <h2 className="text-lg font-bold">Total</h2>
                    <h2 className="text-lg font-bold text-green">$59.38</h2>
                </div>
                <div className="pt-5">
                    <h2 className="text-lg font-bold">Payment method</h2>
                    <p className="text-gray-500 mt-3"> - Pay with a Credit/Debit Card</p>
                </div>
            </div>
            <FormBtn
                title="Place Order"
                onClick={placeOrder}
            />
        </div>
    )
}

export default YourOrder