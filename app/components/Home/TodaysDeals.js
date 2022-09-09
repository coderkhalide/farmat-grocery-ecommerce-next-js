import ProductCard from '../Product/ProductCard';
import SectionHeading from '../shared/SectionHeading';

const TodaysDeals = () => {
    return (
        <section className="pt-5 pb-14">
            <div className="container">
                <SectionHeading
                    title="Top Saver Today"
                    moreText="All Offers"
                />
                {/* Products */}
                <div className="flex gap-7 overflow-x-auto mt-5 pt-5 pb-14 pl-2 -ml-2 no-scrollbar">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    )
}

export default TodaysDeals