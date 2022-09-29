import Breadcrumb from "../app/components/shared/Breadcrumb"

const Cart = () => {
    return (
        <main>
            <div className="bg-[#F5F5F5] p-5">
                <div className="mx-auto max-w-5xl">
                    <Breadcrumb
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'Shop', href: '/products' },
                            { label: 'Cart' },
                        ]}
                    />
                </div>
            </div>
            <div className="p-5">
                <div className="mx-auto max-w-5xl mt-10">
                    <h1 className="text-4xl text-center text-title font-bold mb-10">Cart</h1>
                </div>
            </div>
        </main>
    )
}

export default Cart