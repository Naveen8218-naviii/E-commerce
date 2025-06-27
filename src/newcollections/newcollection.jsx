import React from 'react'
import data_product from '../assets/dataproduct'
import Item from '../component/item_copy'
import new_collections from '../assets/newcollections'
const Newcollection = () => {
  return (
<<<<<<< HEAD
    <div className='bg-gradient-to-b from-slate-600 to-slate-200 w-full h-auto gap-10 pb-10 flex flex-col justify-center items-center '>
      <p className='text-slate-300 text-5xl font-bold mt-5'>New Collections</p>


      <div className='flex flex-wrap w-200 justify-center  gap-15  text-black text-lg'>
=======
    <div className='bg-gradient-to-b from-slate-600 to-slate-200 w-314 h-350 gap-10 pb-10 flex flex-col justify-center items-center '>
      <p className='text-slate-300 text-5xl font-bold '>New Collections</p>


      <div className='flex flex-wrap w-200 justify-center  gap-8  text-black text-lg'>
>>>>>>> f7a469e5b7391d9c7c89314380b17b6091dc2665
{new_collections.map((item,i)=>{
return  <Item key={i} id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})}
      </div>
    </div>
  )
}

export default Newcollection
