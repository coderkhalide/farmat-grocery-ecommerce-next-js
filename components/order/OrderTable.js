import React, { useEffect, useState } from 'react'
import OrderTableRow from './OrderTableRow';
import OrderTableMobile from './OrderTableMobile';
import { db } from "./../../utils/firebase"
import { LoadingOverlay } from '@mantine/core';

const OrderTable = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    // Get orders from firebase
    useEffect(() => {
        setLoading(true)
        db.collection('orders').orderBy('created_at', 'desc')
            .get()
            .then((querySnapshot) => {
                const orders = []
                querySnapshot.forEach((doc) => {
                    orders.push(
                        {
                            id: doc.id,
                            ...doc.data(),
                            created_at: doc.data().created_at.toDate().getTime()
                        }
                    )
                })
                setOrders(orders)
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="my-5 relative">
            <LoadingOverlay visible={loading}/>
            <table className="w-full md:table hidden">
                <thead className="bg-gray-100">
                    <tr className="text-left">
                        <th className="text-title py-5 pl-3">Order Id</th>
                        <th className="text-title py-5">Products</th>
                        <th className="text-title py-5">Total Price</th>
                        <th className="text-title py-5">Time ago</th>
                        <th className="text-title py-5">Payment</th>
                        <th className="text-title py-5">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((item, i) => (
                        <OrderTableRow key={i} {...item} />
                    ))}
                </tbody>
            </table>
            {orders.map((item, i) => (
                <OrderTableMobile key={i} {...item} />
            ))}
        </div>
    )
}

export default OrderTable