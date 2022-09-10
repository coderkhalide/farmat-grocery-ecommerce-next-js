import ProductCard from '../Product/ProductCard';
import SectionHeading from '../shared/SectionHeading';
import { ESSENTIAL } from "../../data/products.js"

const EssentialProducts = () => {

    return (
        <section className="pt-5 pb-5">
            <div className="container">
                <SectionHeading
                    title="Essential Products"
                    categories={["All", "Grocery", "Fruits", "Vegetables", "Meat", "Fish"]}
                />
                {/* Products */}
                <div className="w-full flex gap-7 overflow-x-auto mt-5 pt-5 pb-14 pl-2 -ml-2 no-scrollbar">
                    {ESSENTIAL.map((product, index) => (
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

export default EssentialProducts