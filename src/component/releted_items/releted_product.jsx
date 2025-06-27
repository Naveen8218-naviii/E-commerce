import React from 'react'
import data_product from '../../assets/dataproduct'
import Item from '../../component/item'

const Releted_product = () => {
  return (
    
<<<<<<< HEAD
    <div className='w-full flex flex-col items-center mt-10 gap-10 pb-5'>

<h1 className='text-3xl text-black '>Releted Product <hr className=''/> </h1>
        
    <div className='w-full flex flex-wrap h-100  gap-5 justify-center '>
=======
    <div className='w-314 flex flex-col items-center mt-10 gap-10 pb-5'>

<h1 className='text-3xl text-black '>Releted Product <hr className=''/> </h1>
        
    <div className='w-300 flex flex-wrap h-100  gap-5 justify-center '>
>>>>>>> f7a469e5b7391d9c7c89314380b17b6091dc2665
      {data_product.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} catogry={item.category} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
    </div>
    </div>
  )
}

export default Releted_product
