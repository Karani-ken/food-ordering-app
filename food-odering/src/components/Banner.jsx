import React from 'react'
import Banner_image from '../Assets/pizza_banner.png'

const Banner = () => {
  return (
    <div className='banner w-full md:w-2/3 px-7 
    mx-auto relative flex items-center 
    justify-between'>
        <div className="banner-description w-full md:w-1/2 p-3">
            <h2 className='mb-6 text-xl font-bold text-white'>
                Food Ordering Made Easy
            </h2>
            <p className='font-semibold text-lg text-red-600 py-2'>
                Get Started Today
            </p>

            <div className="btn-container">
                <button>Order Now</button>
                <a href="/menu" className='text-yellow-300 hover:text-yellow-600 font-bold text-decoration-line px-3'>
                    See menu
                </a>
            </div>
        </div>
        <div className='banner-image w-full md:w-1/2 p-3 flex justify-end'>
            <img src={Banner_image} alt='banner' className='max-h-95'/>

        </div>
    
    </div>
  )
}

export default Banner