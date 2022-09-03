import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
// Slider Left Right
const LeftRight = ({ leftClick, rightClick }) => {
  return (
    <div className="flex items-center gap-3">
        <div onClick={leftClick} className="rounded text-color bg-gray-100 hover:bg-primary transition-all duration-300 p-2 cursor-pointer">
            <AiOutlineLeft />
        </div>
        <div onClick={rightClick} className="rounded text-color bg-gray-100 hover:bg-primary transition-all duration-300 p-2 cursor-pointer">
            <AiOutlineRight />
        </div>
    </div>
  )
}

export default LeftRight