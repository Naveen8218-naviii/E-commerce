import React from 'react'
import {Link} from 'react-router-dom'

const Item = (props) => {
  return (
<<<<<<< HEAD
    <div className='  border-2 border-gray-500 p-2 rounded-lg hover:scale-110 duration-100 bg-white '>
=======
    <div className='flex flex-col  border-2 border-gray-500 p-2 rounded-lg hover:scale-110 duration-100 bg-white '>
>>>>>>> f7a469e5b7391d9c7c89314380b17b6091dc2665
    <Link to={`/product/${props.id}`}>  <img src={props.image} alt='imge no' className=' w-50 h-80 bg-black rounded-lg'/></Link>
    <p className='font-bold text-xl'>{props.name}</p>
    <p>{props.category}</p>
    <div className='flex gap-5'>
     <p>{props.new_price}</p> 
      <p className='line-through text-red-500'>{props.old_price}</p>
      </div>
    </div>
  )
}

export default Item
