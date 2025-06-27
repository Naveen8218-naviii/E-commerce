import React ,{useContext}from 'react'
import {Shopcontext} from '../shopcontext'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Item from '../item_copy1'
const Shopcategoy = (props) => {
  const {all_product} =useContext(Shopcontext)
  return (
<<<<<<< HEAD
<div className='h-auto w-full  flex flex-col items-center justify-center'>
  <div className=' bg-gradient-to-tr from-green-400 to-gray-400 w-full  flex justify-center'>
      <img src={props.banner} className='w-full h-120 p-10 rounded-lg' />
    </div>
    
    
    <div className='h-auto p-12 w-full flex flex-col justify-center items-center flex-wrap gap-10 bg-gradient-to-br from-cyan-400 to-cyan-100 w'>
      <div className='flex  text-black font-semibold gap-100'>
=======
<div className='h-200 w-314 pb-390 flex flex-col items-center'>
  <div className=' bg-gradient-to-tr from-green-400 to-gray-400 w-full  flex justify-center'>
      <img src={props.banner} className='w-250' />
    </div>
    
    
    <div className='h-auto p-12 w-full flex justify-center flex-wrap gap-10 bg-gradient-to-br from-cyan-400 to-cyan-100 '>
      <div className='flex gap-160 text-black font-semibold'>
>>>>>>> f7a469e5b7391d9c7c89314380b17b6091dc2665
       <p className='text-lg'>
        <span>Showing 1-12</span> out of 36 Products
      </p>

<<<<<<< HEAD
      <div className='flex items-center gap-5 w-30 h-10 rounded-lg bg-slate-400 justify-center '>
=======
      <div className='flex items-center gap-5 w-30 h-10 rounded-lg bg-slate-400 justify-center'>
>>>>>>> f7a469e5b7391d9c7c89314380b17b6091dc2665
       <p> Sort by </p>
       <div><IoIosArrowDropdownCircle /></div>
      </div>
     </div>
<<<<<<< HEAD
<div className='w-[70%] flex h-auto flex-wrap gap-20 justify-center items-center '>
=======

>>>>>>> f7a469e5b7391d9c7c89314380b17b6091dc2665
      {all_product.map((item,i)=>{
        if(props.category==item.category){
          return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        }
      })}
<<<<<<< HEAD
</div>
=======

>>>>>>> f7a469e5b7391d9c7c89314380b17b6091dc2665
       <button className='w-40 h-10 bg-slate-400 rounded-lg text-black font-medium flex items-center justify-center gap-3'>
        <p>Explore more </p><IoIosArrowDropdownCircle />
        </button>
    </div>
   
    </div>

  )
}

export default Shopcategoy
