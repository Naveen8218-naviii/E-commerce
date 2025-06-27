import React from 'react'
import data_product from '../../assets/dataproduct'
import Item from '../../component/item'

const Releted_product = () => {
  return (
    
    <div className='w-full flex flex-col items-center mt-10 gap-10 pb-5'>

<h1 className='text-3xl text-black '>Releted Product <hr className=''/> </h1>
        
    <div className='w-300 flex flex-wrap h-100  gap-5 justify-center '>
      {data_product.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} catogry={item.category} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
    </div>
    </div>
  )
}

export default Releted_product
