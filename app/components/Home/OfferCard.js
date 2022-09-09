import React from 'react'

const OfferCard = ({ img, category, title }) => {
    return (
        <div className="group !min-w-[352px] flex flex-col items-start cursor-pointer">
            <img className="rounded-lg" src={`/images/featured_brands/homepage-new-brand-img-${img}.webp`} alt="" />
            <span className="text-gray-500 text-lg font-semibold mt-4 uppercase">{category}</span>
            <span className="text-title  transition-all duration-300 group-hover:text-primary text-lg font-bold -mt-1">{title}</span>
        </div>
    )
}

export default OfferCard