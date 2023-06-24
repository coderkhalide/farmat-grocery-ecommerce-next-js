import SectionHeading from '../shared/SectionHeading';
import OfferCard from './OfferCard';

const OFFERS = [
    {
        category: "FOOD POUCH",
        title: "New Snacks Release",
        img: "1"
    },
    {
        category: "itea jsc",
        title: "Happy Tea 100% Organic. From $29.9",
        img: "2"
    },
    {
        category: "Soda BRand",
        title: "Soda Can Box 24 Pieces - 30% OFF",
        img: "3"
    },
    {
        category: "farmart",
        title: "Fresh Meat Saugage. BUY 2 GET 1!",
        img: "4"
    },
    {
        category: "Soda BRand",
        title: "Soda Can Box 24 Pieces - 30% OFF",
        img: "3"
    },
]

const FeaturedBrands = () => {
    return (
        <section className="pt-5 pb-14">
            <div className="container">
                <SectionHeading
                    title="Featured Brands"
                    moreText="All Offers"
                />
                {/* OFFERS slider */}
                <div className="flex gap-7 overflow-x-auto mt-5 pt-5 pl-2 -ml-2 no-scrollbar">
                    {OFFERS.map((item, index) => (
                        <OfferCard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedBrands