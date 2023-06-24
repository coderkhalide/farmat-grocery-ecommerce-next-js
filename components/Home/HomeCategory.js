import SectionHeading from '../shared/SectionHeading';
import CategoryCard from './CategoryCard';

const CATEGORY = [
    {
        category: "Fruits & Vegetables",
        img: "1"
    },
    {
        category: "Breads Sweets",
        img: "2"
    },
    {
        category: "Frozen Seafoods",
        img: "3"
    },
    {
        category: "Raw Meats",
        img: "4"
    },
    {
        category: "Wines & Alcohol Drinks",
        img: "5"
    },
    {
        category: "Coffees and Teas",
        img: "6"
    },
    {
        category: "Milks and Dairies",
        img: "7"
    },
    {
        category: "Pet Foods",
        img: "8"
    },
    {
        category: "Food Cupboard",
        img: "1"
    },
]

const HomeCategory = () => {
    return (
        <section className="pt-16 pb-5">
            <div className="container">
                <SectionHeading
                    title="Browse by Category"
                    moreText="All Categories"
                />
                {/* Category slider */}
                <div className="flex items-center gap-7 overflow-x-auto mt-5 pt-5 pb-14 pl-2 -ml-2 no-scrollbar">
                    {CATEGORY.map((item, index) => (
                        <CategoryCard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeCategory