import React ,{useContext}from 'react'
import {Shopcontext} from '../shopcontext'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Item from '../item_copy1'
const Shopcategoy = (props) => {
  const {all_product} =useContext(Shopcontext)
  return (
<div className='h-auto w-full  justify-center flex flex-col items-center'>
  <div className=' bg-gradient-to-tr from-green-400 to-gray-400 w-full  flex justify-center'>
      <img src={props.banner} className='w-250' />
    </div>
    
    
    <div className='h-auto  w-full items-center justify-center flex-col  flex gap-10 bg-gradient-to-br from-cyan-400 to-cyan-100 '>
      <div className='flex  text-black font-semibold m'>
       <p className='text-lg '>
        <span>Showing 1-12</span> out of 36 Products
      </p>

      <div className='flex  items-center gap-5 w-30 h-10 rounded-lg bg-slate-400 justify-center'>
       <p> Sort by </p>
       <div><IoIosArrowDropdownCircle /></div>
      </div>
     </div>
<div className='flex justify-center flex-wrap gap-30  w-[70%] '>
      {all_product.map((item,i)=>{
        if(props.category==item.category){
          return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        }
      })}
</div>
       <button className='w-40 h-10 bg-slate-400 rounded-lg text-black font-medium flex items-center justify-center gap-3'>
        <p>Explore more </p><IoIosArrowDropdownCircle />
        </button>
    </div>
   
    </div>

  )
}

export default Shopcategoy
