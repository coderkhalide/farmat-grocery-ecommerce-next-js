import React from 'react'
import { setBackgroundImage } from '../../utils/helpers'

const HomePosters = () => {
  return (
    <section className="py-8">
         <div className="container">
                <div className="flex flex-wrap justify-between">
                    <div className="md:w-[32%] mb-5 w-full md:py-14 md:px-12 py-10 px-6 rounded-lg" style={setBackgroundImage('https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-banner-2.png', { backgroundPosition: 'center center', backgroundColor: '#FAC250', backgroundSize: 'cover' })}>
                        <div className="flex flex-col justify-between h-full">
                            <div className="">
                                <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-title">Mango Juice<br />Bottle</h2>
                            </div>
                            <a href="/" className="text-color text-lg font-semibold md:mt-8 mt-6">20% off for new customer</a>
                        </div>
                    </div>
                    <div className="md:w-[32%] mb-5 w-full md:py-14 md:px-12 py-10 px-6 rounded-lg" style={setBackgroundImage('https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-banner-3.png', { backgroundPosition: 'bottom right', backgroundColor: '#D5DEE5', backgroundSize: 'unset' })}>
                        <div className="flex flex-col justify-between h-full">
                            <div className="">
                                <span className="text-orange text-3xl font-bold">$14.5</span>
                                <h2 className="md:text-2xl sm:text-lg text-base font-bold text-title mt-4">Meat pork</h2>
                            </div>
                            <span className="text-gray-500 text-lg font-semibold md:mt-8 mt-6">250g</span>
                        </div>
                    </div>
                    <div className="md:w-[32%] mb-5 w-full md:py-14 md:px-12 py-10 px-6 rounded-lg" style={setBackgroundImage('https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-banner-4.png', { backgroundPosition: 'center center', backgroundColor: '#FEAC7D', backgroundSize: 'cover' })}>
                        <div className="flex flex-col justify-between h-full">
                            <div className="">
                                <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-white">Olive oil</h2>
                                <p className="text-white md:mt-7 mt-4 font-bold">Best product to make <br />your favor</p>
                            </div>
                            <span className="text-white text-lg font-semibold md:mt-8 mt-6">ONLY</span>
                            <span className="text-white text-3xl font-bold">$14.5</span>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default HomePosters