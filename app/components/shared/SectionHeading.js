import { AiOutlineRight } from 'react-icons/ai';
import LeftRight from './LeftRight';

const SectionHeading = ({ title, moreText, moreUrl = "/" }) => {
    return (
        <div className="flex items-center justify-between">
            {/* Section title */}
            <div className="flex items-center gap-10">
                <h1 className="section-title">{title}</h1>
                <a href={moreUrl} className="hidden md:flex text-color text-lg items-center gap-2">{moreText} <AiOutlineRight /></a>
            </div>
            {/* Slider Left Right */}
            <LeftRight />
        </div>
    )
}

export default SectionHeading