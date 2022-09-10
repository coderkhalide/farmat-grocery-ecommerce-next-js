import ProductCard from '../Product/ProductCard';
import SectionHeading from '../shared/SectionHeading';
import { DEALS } from "../../data/products.js"

const TodaysDeals = () => {

    return (
        <section className="pt-10 pb-5">
            <div className="container">
                <SectionHeading
                    title="Top Saver Today"
                    moreText="All Offers"
                />
                {/* Products */}
                <div className="w-full flex gap-7 overflow-x-auto mt-5 pt-5 pb-14 pl-2 -ml-2 no-scrollbar">
                    {DEALS.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                        />
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default TodaysDeals