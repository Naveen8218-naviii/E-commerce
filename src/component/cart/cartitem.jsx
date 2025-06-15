import React ,{useContext}from 'react'
import {Shopcontext} from '../../component/shopcontext'
import Removeicon from '../../assets/remove.webp'
const Cartitem = () => {
    const{all_product,cartItems,removetoCart}=useContext(Shopcontext);
    
    return (
    <div className='w-314  flex-col  grid text-black bg-black'>
      <div className=' w-314 flex gap-40 items-center text-xl  p-10 font-bold bg-slate-500 h-20'>
<p>Products</p>
<p>title</p>
<p>Price</p>
<p>Qty</p>
<p>Total</p>
<p>Remove</p>
<hr />
      </div>

     {all_product.map((e)=>{
if (cartItems[e.id]>0) {
    return  <div className='flex gap-43 w-314 mt-10 text-lg items-center font-semibold bg-gradient-to-b from-green-200 to-violet-400 p-5 rounded-xl'>
        <img src={e.image} className='h-20 w-20'/>
        <p>{e.name}</p>
        <p>${e.new_price}</p>
        <button>{e.id}</button>
        <p>${e.old_price}</p>
       <button className='bg-red-500 h-8 w-25 justify-center flex items-center rounded-lg'> <img src={Removeicon} onClick={()=>removetoCart(e.id)} className='h-5 w-5 ' />Remove</button>
      </div>
}
     })}
      <hr />
    </div>
  )
}

export default Cartitem
