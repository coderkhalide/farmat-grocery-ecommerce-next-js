import React from 'react'

const CategoryCard = ({ img, category }) => {
    return (
        <div className="bg-gray-100 rounded-lg !min-w-[180px] h-56 px-5 flex flex-col items-center justify-center text-center transition-all duration-500 cursor-pointer hover:bg-white hover:card-shadow">
            <img src={`/images/category/homepage-new-cat-${img}.webp`} alt="" />
            <h4 className="text-title text-lg font-semibold leading-6 mt-4">{category}</h4>
        </div>
    )
}

export default CategoryCard