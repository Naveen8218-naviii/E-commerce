import React from 'react'
import Exclu from '../../assets/exclu.webp'


const Offers = () => {
  return (
    <div className=' h-100 w-full ml-60 flex justify-center gap-9'>
      <div className='flex bg-gradient-to-bl from-inherit to-teal-300'>

        <div className='text-black w-80 flex flex-col justify-center gap-6 p-5'>
        <h1 className='text-4xl font-bold'>Exclusive</h1>
        <h2 className='text-3xl font-semibold'>Offers For You</h2>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        
        <button className='bg-red-500 text-white rounded w-30 h-10 hover:bg-red-900 cursor-pointer'>Check now</button>
        </div>
        <div className=''>
<img src={Exclu} className='h-100'/>
      </div>
      </div>

      
    </div>
  )
}

export default Offers
