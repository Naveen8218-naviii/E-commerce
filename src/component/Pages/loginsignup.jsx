import React from 'react'
import log from '../../assets/login.webp'

const Loginsignup = () => {
  return (
    <div className=' h-full  p-10 flex justify-center' style={{ backgroundImage: `url(${log})`, width:`214vh` }} >
      <div  className='w-100  h-100 border-2 flex  flex-col justify-center items-center gap-8  text-white rounded-xl hover:scale-105 '>
          <h1 className='mr-25 font-bold text-2xl'>Sign Up</h1>

          <div className='w-80% flex flex-col gap-8'>
            <input type='text' placeholder='Your name' className='border-1 w-70 h-10 rounded-lg p-2  '/>
             <input type='text' placeholder='Email Address' className='border-1 w-70 h-10 rounded-lg p-2'/>
              <input type='password' placeholder='Password' className='border-1 w-70 h-10 rounded-lg p-2'/>
          </div>
          <button className='w-70 bg-red-400 h-10 rounded-xl'>Continue</button>

          <div className='flex gap-3'>
            <p>Already have an account ? </p>
            <p className='text-red-600'>Login here</p>
          </div>
      </div>
     
    </div>
  )
}

export default Loginsignup
