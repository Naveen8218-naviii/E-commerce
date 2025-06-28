import React from 'react'

const Newslatter = () => {
  return (

    <div className=' w-full h-50 flex items-center justify-center gap-3 flex-col'>

      <h1 className='font-bold text-5xl text-slate-700'>Get Exclusive Offers on Your Email</h1>
      <p className='font-bold text-xl text-slate-700'>Subscribe to our Newslatter and stay update</p>
      <div className='border-1 border-black w-150 h-12 flex  rounded-full '>
        <input type="text" placeholder='Enter Your mail' className='pl-5 text-slate-600 rounded-l-full  w-110'/>
        <button className='bg-black text-white text-xl w-40 rounded-r-full '>Subscribe</button>
      </div>
    </div>
  )
}

export default Newslatter
