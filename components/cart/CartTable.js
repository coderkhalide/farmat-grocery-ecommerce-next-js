import React from 'react'
import CartTableRow from './CartTableRow';
import CartTableMobile from './CartTableMobile';
import { selectItems } from '../../redux/slices/basketSlice';
import { useSelector } from 'react-redux';

const CartTable = () => {
    const cartItems = useSelector(selectItems)

    return (
        <div className="my-5">
            <table className="w-full md:table hidden">
                <thead className="bg-gray-100">
                    <tr className="text-left">
                        <th className="text-title py-5"></th>
                        <th className="text-title py-5">Product</th>
                        <th className="text-title py-5">Price</th>
                        <th className="text-title py-5">Quantity</th>
                        <th className="text-title py-5">Total</th>
                        <th className="text-title py-5"></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, i) => (
                        <CartTableRow key={i} {...item} />
                    ))}
                </tbody>
            </table>
            {cartItems.map((item, i) => (
                <CartTableMobile key={i} {...item} />
            ))}
        </div>
    )
}

export default CartTable