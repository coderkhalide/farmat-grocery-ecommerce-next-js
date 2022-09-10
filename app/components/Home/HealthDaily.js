import ProductCard from '../Product/ProductCard';
import SectionHeading from '../shared/SectionHeading';
import { HEALTHY } from "../../data/products.js"
import BlogCard from './BlogCard';

const HealthDaily = () => {

    return (
        <section className="pt-5 pb-10">
            <div className="container">
                <SectionHeading
                    title="Essential Products"
                    moreText={"All Articles"}
                    noButton
                />
                {/* Articles */}
                <div className="border border-gray-100 rounded-lg mt-8 flex items-center">
                    {HEALTHY.map((blog, index) => (
                        <BlogCard
                            key={index}
                            {...blog}
                        />
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default HealthDaily