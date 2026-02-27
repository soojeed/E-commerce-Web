import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='container'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-2 gap-8  '>
         <div className='xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative'>
            <img className='w-full h-full  object-cover rounded-r-4xl' src="/nuts-dried-fruits-white-background-sources-antioxidants-vitamins-healthy-eating-flat-top-view-copy-space_76255-1509.avif" alt="Hero Image" />

           <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[10%] sm:space-y-4 '>
                <p className='text-2x hidden sm:block '> 100% Original Dry Fruits</p>
                <h2 className='text-2xl sm:text-4xl  md:text-6xl font-bold'>Dried Fruits Best Healthy</h2>
                <p className='text-gray-500 text-xl pt-4 sm:pt-8 '>Starting At</p>
                <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8'>$18.36</div>
                <div className='bg-accent-dark hover:bg-accent text-white rounded-full w-fit flex items-center
                gap-4 px-4 py-2 text-[14px] sm:px-6 smpy-3 cursor-pointer'>Show Now <BsArrowRight/></div>
            </div>
            
         </div>

         <div className="relative">
            <img  className='h-[300px] w-full object-cover rounded-lg' src="/hero.png" alt="" />

             <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2 '>
        
                <h2 className='text-1xl sm:text-2xl  font-bold'>Best Yommy Avacado</h2>
                <p className='text-black text-xl pt-4 sm:pt-8 '>Starting At</p>
                <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8'>$25</div>
                <div className='bg-accent-dark hover:bg-accent text-white rounded-full w-fit flex items-center
                gap-4 px-4 py-2 text-[14px] sm:px-6 smpy-3 cursor-pointer'>Show Now <BsArrowRight/></div>
            </div>
         </div>

          <div className="relative">
            <img  className='h-[300px] w-full object-cover rounded-lg' src="/hero2.png" alt="" />

             <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2 text-white'>
        
                <h2 className='text-1xl sm:text-2xl  font-bold'>Best Yommy Pizza</h2>
                <p className='text-black text-xl pt-4 sm:pt-8 '>Starting At</p>
                <div className='font-medium text-black text-2xl sm:text-4xl pb-4 sm:pb-8'>$25</div>
                <div className='bg-accent-dark hover:bg-accent text-white rounded-full w-fit flex items-center
                gap-4 px-4 py-2 text-[14px] sm:px-6 smpy-3 cursor-pointer'>Show Now <BsArrowRight/></div>
            </div>
         </div>

        
        </div>
    </div>
  )
}

export default Hero