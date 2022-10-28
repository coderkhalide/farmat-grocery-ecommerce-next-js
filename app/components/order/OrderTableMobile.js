import Link from 'next/link';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from '../../redux/slices/basketSlice';
import { timeAgo } from '../../utils/helpers';
import Quantity from '../shared/Quantity';

const OrderTableMobile = ({ order_id, name, items, total, payment_success, created_at }) => {

    return (
        <div className="md:hidden mb-5 border-b pb-5">
            <h3 className="truncate w-4/5">Order ID: {order_id}</h3>
            <p className="text-sm text-gray-500 mb-3">Ordered {timeAgo(created_at)} ago</p>
            {items.map((item, i) => (
                <Link key={i} href={`/products/${item.id}`}>
                    <h3 className="cursor-pointer hover:text-primary text-sm font-bold text-title">
                        {item?.name} <span className="text-sm text-gray-500">({item?.quantity}x)</span>
                    </h3>
                </Link>
            ))}
            <p className="text-sm text-gray-500 mt-3">Payment: {payment_success ? 'success' : 'failed'}</p>
            <p className="text-sm text-gray-500">Status: <span className="text-primary font-semibold">Pending</span></p>
            <p className="text-sm text-gray-500 mt-2">Total: <span className="text-green font-semibold">${total}</span></p>
        </div>
    )
}

export default OrderTableMobile