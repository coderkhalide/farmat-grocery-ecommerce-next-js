import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from '../../redux/slices/basketSlice';
import Quantity from '../shared/Quantity';

const CartTableMobile = ({ id, name, image, price, weight, quantity }) => {
    const dispatch = useDispatch()

    const increaseQuantity = () => {
        dispatch(increaseItemQuantity(id))
    }

    const decreaseQuantity = () => {
        dispatch(decreaseItemQuantity(id))
    }
    return (
        <div className="md:hidden flex gap-3 mb-5 border-b pb-5">
            <div>
                <img src={image} loading="lazy" alt="" className="w-20 h-20 object-cover rounded-md" />
            </div>
            <div className="flex-grow space-y-1">
                <h1 className="text-lg font-bold text-title">{name}</h1>
                <p className="text-sm text-gray-500">Weight: {weight}</p>
                <p className="text-sm text-gray-500">Price: <span className="text-primary font-semibold">${price}</span></p>
                <div className="py-2">
                    <Quantity
                        quantity={quantity}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                    />
                </div>
                <p className="text-sm text-gray-500">Price: <span className="text-green font-semibold">${(quantity * price).toFixed(2)}</span></p>
            </div>
            <div className="mt-2">
                <MdDelete onClick={() => dispatch(removeItem(id))} className="text-2xl cursor-pointer" />
            </div>
        </div>
    )
}

export default CartTableMobile