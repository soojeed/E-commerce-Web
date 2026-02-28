import React from 'react'

const FeatureSectionFruit = () => {
  return (
    <div className='container pt-16'>
        <div className='lg:flex  justify-between items-center'>
            <div>
                <h3 className='font-medium text-2xl'> Fruits & Vegetable</h3>
                <p className='text-gray-600 mt-2'>
                    Buy Farm fresh fruit and vegetable online at the best prices 
                </p>
            </div>

            <div className='space-x-4 mt-8 lg:mt-0'>
                <button className='feature_btn '>Fruits</button>
                <button className='text-gray-600 hover:text-accent'>Vegetable</button>
                <button className='text-gray-600 hover:text-accent'>Bread & Bakery</button>

            </div>
        </div>

        <div className='grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2'>
            <div >
                <img className='w-full h-full object-cover' src="images (1).png" alt="banner" />
            </div>
        </div>
    </div>
  )
}

export default FeatureSectionFruit