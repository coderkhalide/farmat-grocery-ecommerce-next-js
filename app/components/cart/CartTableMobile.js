import { MdDelete } from 'react-icons/md';
import Quantity from '../shared/Quantity';

const CartTableMobile = () => {
    return (
        <div className="md:hidden flex gap-3 mb-5 border-b pb-5">
            <div>
                <img src="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/04_4a.jpg?w=800&ssl=1" alt="" className="w-20 h-20 object-cover rounded-md" />
            </div>
            <div className="flex-grow space-y-1">
                <h1 className="text-lg font-bold text-title">
                    Soft Mochi & Galeto Ice Cream</h1>
                <p className="text-sm text-gray-500">Color: Black</p>
                <p className="text-sm text-gray-500">Size: M</p>
                <p className="text-sm text-gray-500">Price: <span className="text-primary font-semibold">$100</span></p>
                <div className="py-2">
                    <Quantity />
                </div>
                <p className="text-sm text-gray-500">Price: <span className="text-green font-semibold">$100</span></p>
            </div>
            <div className="mt-2">
                <MdDelete className="text-2xl cursor-pointer" />
            </div>
        </div>
    )
}

export default CartTableMobile