import React from 'react'
import {Link} from 'react-router-dom'

const Item = (props) => {
  return (
    <div>
       <div className='flex flex-col m-2 border-4 border-black p-1 rounded-lg hover:scale-110 duration-100 bg-white mt-5'>
      <Link to={`/product/${props.id}`}>  <img src={props.image} alt='imge no' className=' md:w-60 md:h-100 bg-black rounded-lg '/></Link>
    <p className='font-bold text-xl text-black'>{props.name}</p>
    <p>{props.category}</p>
    <div className='flex gap-5 font-bold'>
     <p className='text-black'>{props.new_price}</p> 
      <p className='line-through text-red-500'>{props.old_price}</p>
      </div>
    </div>
    </div>
  )
}

export default Item
