import { AiOutlineRight } from 'react-icons/ai';
import LeftRight from './LeftRight';

const SectionHeading = ({ title, moreText, moreUrl = "/", categories, noButton }) => {
    return (
        <div className="flex items-center justify-between">
            {/* Section title */}
            <div className="flex items-center gap-10">
                <h1 className="section-title">{title}</h1>
                {/* Categories */}
                {categories ? (
                    <div className="hidden md:flex items-center gap-5">
                        {categories?.map((category, index) => (
                            <a
                                key={index}
                                href={moreUrl}
                                className="text-color text-lg"
                            >
                                {category}
                            </a>
                        ))}
                    </div>
                ) : (
                    <a href={moreUrl} className="hidden md:flex text-color text-lg items-center gap-2">{moreText} <AiOutlineRight /></a>
                )}
            </div>
            {/* Slider Left Right */}
            {!noButton && (
                <LeftRight />
            )}
        </div>
    )
}

export default SectionHeading