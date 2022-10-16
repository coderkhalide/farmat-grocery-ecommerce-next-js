
const Quantity = ({ quantity, increaseQuantity, decreaseQuantity }) => {
    return (
        <div className="flex border h-10 ">
            <button onClick={decreaseQuantity} className="w-10 bg-[#F5F5F5] flex items-center justify-center">
                -
            </button>
            <div className="px-5 flex-grow flex items-center justify-center">{quantity || 1}</div>
            <button onClick={increaseQuantity} className="w-10 bg-[#F5F5F5] flex items-center justify-center">
                +
            </button>
        </div>
    )
}

export default Quantity