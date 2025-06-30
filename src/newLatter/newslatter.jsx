import React from 'react'

const Newslatter = () => {
  return (
    <div className=' w-full md:h-auto h-50 flex items-center justify-center md:gap-3 gap-2 flex-col  '>
      <h1 className='font-bold md:text-5xl text-lg text-slate-700 '>Get Exclusive Offers on Your Email</h1>
      <p className='font-bold md:text-xl text-slate-700'>Subscribe to our Newslatter and stay update</p>
      <div className='border-1 border-black md:w-150 md:h-12 flex  rounded-full '>
        <input type="text" placeholder='Enter Your mail' className='pl-5 text-slate-600 rounded-l-full  md:w-110'/>
        <button className='bg-black text-white md:text-xl md:w-40 rounded-r-full '>Subscribe</button>
      </div>
    </div>
  )
}

export default Newslatter
