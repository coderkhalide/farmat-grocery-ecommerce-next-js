import Image from "next/image"

const ProductCard = () => {
    return (
        <div className="product-card">
            <span className="bg-orange text-white text-xs px-2 py-1 rounded-md absolute top-5 left-5 z-10">
                14% OFF
            </span>
            {/* Image */}
            <Image
                src="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/08_3a.jpg?resize=300%2C300&ssl=1"
                width={270}
                height={270}
                objectFit="contain"
            />
            {/* Product Details */}
            <div className="flex flex-col gap-1 mt-2 w-full">
                <h4 className="text-sm font-bold text-color">Farmart</h4>
                <h3 className="text-lg font-semibold text-title truncate "> Fresh Meat Saugage. BUY 2 GET 1! Fresh Meat Saugage. BUY 2 GET 1! Fresh Meat Saugage. BUY 2 GET 1!</h3>
                <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-orange">$29.9</span>
                    <span className="text-sm line-through text-gray-400">$39.9</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard