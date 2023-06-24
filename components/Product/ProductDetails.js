import FooterCard from "../FooterCard"
import Breadcrumb from "../shared/Breadcrumb"
import Quantity from "../shared/Quantity"

const ProductDetails = ({ price = 30.25, oldPrice }) => {
    return (
        <div className="py-12 bg-[#F5F5F5]">
            <div className="container">
                <div className="p-10 bg-white rounded-2xl">
                    <div className="flex flex-wrap lg:flex-row flex-col lg:gap-0 gap-7">
                        <div className="lg:w-2/5 w-full lg:border-r">
                            <img src="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/05_11a.jpg?fit=800%2C800&ssl=1" alt="" loading="lazy" />
                        </div>
                        <div className="lg:w-2/5 w-full lg:px-10 pl-0">
                            <Breadcrumb />
                            <h4 className="md:text-xl text-base font-bold mb-2 mt-5 text-orange">MartFury</h4>
                            <h1 className="text-title md:text-3xl text-xl font-semibold mb-5">Naked Noodle Egg Noodles Singapore</h1>
                            <span className="text-color text-xs">⭐⭐⭐⭐⭐ (1 customer review)</span>
                            <div className="my-3">
                                <span className="text-sm text-color mb-2 block">500gl</span>
                                <div className="flex items-center gap-1">
                                    <span className={`text-xl font-bold ${oldPrice ? 'text-orange' : 'text-green'}`}>${price}</span>
                                    {oldPrice && (
                                        <span className="text-lg line-through text-gray-400">${oldPrice}</span>
                                    )}
                                </div>
                            </div>
                            <div className="my-5 bg-[#EBFAE9] w-fit px-3 py-2 border border-[#82d45e] rounded-md">
                                Availability: <span className="text-green ml-1 font-bold">In stock</span>
                            </div>
                            <div className="border-t"></div>
                            <div className="my-5">
                                <span className="text-sm pb-2 block text-color">Quantity:</span>
                                <div className="flex gap-3">
                                    <Quantity />
                                    <button className="btn-white bg-primary">Add to cart</button>
                                </div>
                            </div>
                            <div className="border-t my-7"></div>
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-900"><span className="text-color">SKU:</span> #veg20967</p>
                                <p className="text-gray-900"><span className="text-color">Brand:</span> mangogn</p>
                                <p className="text-gray-900"><span className="text-color">Vendor:</span> MartFury</p>
                                <p className="text-gray-900"><span className="text-color">Categories:</span> Breakfast Cereals, Chocolate & Sweets, Crisps, Snacks & Nuts, Food Cupboard, Tins & Cans</p>
                                <p className="text-gray-900"><span className="text-color">Tag:</span> Best Seller</p>
                            </div>
                        </div>
                        <div className="lg:w-1/5 w-full">
                            <div className="bg-[#F3F3F3] px-5 py-7 rounded-md">
                                <FooterCard
                                    image="/icons/f (1).svg"
                                    title="Free Shipping"
                                    subtitle="For all orders over $200"
                                />
                                <div className="border-t my-5"></div>
                                <FooterCard
                                    image="/icons/f (2).svg"
                                    title="1 & 1 Returns"
                                    subtitle="Cancellation after 1 day"
                                />
                                <div className="border-t my-5"></div>
                                <FooterCard
                                    image="/icons/f (3).svg"
                                    title="Secure Payment"
                                    subtitle="100% secure payments"
                                />
                            </div>
                            <div className="bg-[#F3F3F3] px-5 mt-5 py-7 rounded-md">
                                <p className="font-bold text-title">Hotline Order:</p>
                                <span className="text-color">Mon - Fri: 7:00 am - 18:00PM</span>
                                <p className="text-xl md:text-2xl font-bold text-title mt-5">+856 332 - 466</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails