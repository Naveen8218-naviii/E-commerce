import React from 'react'
import {Link} from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='flex flex-col bg-slate-300 border-2 border-black  p-2 rounded-lg hover:scale-110 duration-100 '>
   <Link to={`/product/${props.id}`}> <img src={props.image} alt='imge no' className=' w-50 h-70 bg-transparent rounded-lg'/></Link>
    <p className='font-bold text-xl'>{props.name}</p>
    <p>{props.category}</p>
    <div className='flex gap-5 bg-slate-600 rounded-lg'>
     <p className='ml-2 text-white'>{props.new_price}</p> 
      <p className='line-through text-red-500'>{props.old_price}</p>
      </div>
    </div>
  )
}

export default Item
