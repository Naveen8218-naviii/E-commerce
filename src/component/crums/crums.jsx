import React from 'react'
import arrow_icon from '../../assets/arrow_icon.png'
const Crums = (props) => {
    const {product} =props;
  return (
    <div className='flex w-314  p-10 justify-center items-center gap-4 text-xl text-gray-700' >
      Home <img src={arrow_icon}className='h-5 w-5'/>
      Shop<img src={arrow_icon}className='h-5 w-5'/>
      {product.category}<img src={arrow_icon}className='h-5 w-5'/>
      {product.name}<img src={arrow_icon}className='h-5 w-5'/>
    </div>
  )
}

export default Crums
