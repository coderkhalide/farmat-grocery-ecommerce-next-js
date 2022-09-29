import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ product }) => {
    const { name, image, price, weight, oldPrice } = product

    const OffCalc = () => {
        const off = ((oldPrice - price) / oldPrice) * 100
        return Math.round(off)
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
                    <span className="text-sm text-color">{weight}</span>
                    <div className="flex items-center gap-1">
                        <span className={`text-base font-bold ${oldPrice ? 'text-orange' : 'text-green'}`}>${price}</span>
                        {oldPrice && (
                            <span className="text-sm line-through text-gray-400">${oldPrice}</span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard