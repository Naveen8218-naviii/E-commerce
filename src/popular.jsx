
import React from 'react'
import data_product from './assets/dataproduct'
import Item from './component/item'


const Popular = () => {
  return (
    <div className='w-315 h-140 bg-slate-400 flex flex-col items-center gap-10 justify-center text-white '>
      <h1 className='text-black font-bold text-4xl hover:underline cursor-default hover:scale-80'>POPULAR ITEMS</h1>
      <div className=' flex gap-20 justify-center h-100 text-black'>

      {data_product.map((item,i)=>{
return <Item key={i} id={item.id} name={item.name} catogry={item.category} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
   

      })}
      </div>
    </div>
  )
}

export default Popular
