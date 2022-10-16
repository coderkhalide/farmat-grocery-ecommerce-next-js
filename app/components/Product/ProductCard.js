import Image from "next/image"
import Link from "next/link"
import { FaCartPlus } from 'react-icons/fa';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, selectItems } from "../../redux/slices/basketSlice"

const exists = false

const ProductCard = ({ product }) => {
    const { id, name, image, price, weight, oldPrice } = product
    const cartItems = useSelector(selectItems)
    const dispatch = useDispatch()

    const OffCalc = () => {
        const off = ((oldPrice - price) / oldPrice) * 100
        return Math.round(off)
    }

    const checkItemExists = (id) => {
        const find = cartItems.filter(item => item.id === id)
        return !!find.length
    }

    const addToBasket = (product) => {
        dispatch(addItem({
            ...product,
            quantity: 1
        }))
    }
    const removeItemFromCart = () => {
        dispatch(removeItem(id))
    }

    return (
        <Link href={`/products`}>
            <div className="product-card bg-white">
                {oldPrice && (
                    <span className="bg-orange text-white text-xs px-2 py-1 rounded-md absolute top-5 left-5 z-10">
                        {OffCalc()}% OFF
                    </span>
                )}
                {/* Image */}
                <Image
                    src={image}
                    width={265}
                    height={270}
                    objectFit="contain"
                />
                {/* Product Details */}
                <div className="flex flex-col gap-1 mt-2 w-full">
                    <h4 className="w-[275px] text-sm font-bold text-color">Farmart</h4>
                    <h3 className="text-lg font-bold text-title truncate">{name}</h3>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-sm text-color">{weight}</span>
                            <div className="flex items-center gap-1">
                                <span className={`text-base font-bold ${oldPrice ? 'text-orange' : 'text-green'}`}>${price}</span>
                                {oldPrice && (
                                    <span className="text-sm line-through text-gray-400">${oldPrice}</span>
                                )}
                            </div>
                        </div>
                        {checkItemExists(id) ? (
                            <button onClick={(e) => {
                                e.stopPropagation()
                                e.preventDefault()
                                removeItemFromCart()
                            }} className='bg-primary text-white rounded-full w-10 h-10 flex justify-center items-center'>
                                <BsFillCartCheckFill size={16} />
                            </button>
                        ) : (
                            <button onClick={(e) => {
                                e.stopPropagation()
                                e.preventDefault()
                                addToBasket(product)
                            }} className='bg-gray-600 text-white rounded-full w-10 h-10 flex justify-center items-center'>
                                <FaCartPlus size={16} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard