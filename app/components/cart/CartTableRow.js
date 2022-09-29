import React from 'react'
import Quantity from '../shared/Quantity'
import { MdDelete } from 'react-icons/md';

const CartTableRow = () => {
    return (
        <>
            <tr className="border-b md:border-r md:border-l table_row">
                <td className="py-5 pl-3">
                    <img src="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/04_4a.jpg?w=800&ssl=1" alt="" className="w-20 h-20 object-cover rounded-md" />
                </td>
                <td className="py-5 max-w-[250px]">
                    <div className="">
                        <h1 className="text-lg font-bold text-title">Farmart - Your Online Foods</h1>
                        <p className="text-sm text-gray-500">Color: Black</p>
                        <p className="text-sm text-gray-500">Size: M</p>
                    </div>
                </td>
                <td className="py-5">$100</td>
                <td className="py-5">
                    <div className="w-32">
                        <Quantity />
                    </div>
                </td>
                <td className="py-5">$100</td>
                <td className="py-5">
                    <MdDelete className="text-2xl cursor-pointer" />
                </td>
            </tr>
        </>
    )
}

export default CartTableRow