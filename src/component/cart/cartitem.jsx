import React ,{useContext}from 'react'
import {Shopcontext} from '../../component/shopcontext'
import Removeicon from '../../assets/remove.webp'
const Cartitem = () => {
    const{all_product,cartItems,removetoCart,getTotalamt}=useContext(Shopcontext);
    
    return (
      <>
    <div className='w-314  flex-col  grid text-black'>
      <div className=' w-314 flex gap-40 items-center text-xl  p-10 font-bold bg-slate-300 h-20'>
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
    return  <div className='flex gap-43 w-314 mt-5 text-lg items-center font-semibold bg-gradient-to-b from-green-200 to-violet-400 p-5 rounded-xl'>
        <img src={e.image} className='h-24 w-22 '/>
        <p>{e.name}</p>
        <p>${e.new_price}</p>
        <button className='bg-slate-400 h-6 w-20 border-1 flex justify-center items-center '>{cartItems[e.id]}</button>
        <p>${getTotalamt()}</p>
       <button className='bg-red-400 h-8 w-35 justify-center flex items-center rounded-lg cursor-pointer hover:bg-red-600'> <img src={Removeicon} onClick={()=>removetoCart(e.id)} className='h-5 w-5 ' />Remove</button>
      </div>
      
} 
     })}
     
    </div>
 <div className='w-314 text-black flex flex-col gap-10 pb-5'>
        <p className='text-3xl font-semibold'>Cart tools</p>

        <div className='flex text-lg pb-10'>
          <div className='flex flex-col gap-8'>
            <p>Subtitle <hr className='w-180 mt-3'/></p>
            
            <p>Shopping Fee <hr className='w-180 mt-3'/></p>
            <p>Total <hr className='w-180 mt-3'/></p>
          </div>

          <div className='flex flex-col gap-8'>
            <p>${getTotalamt()}</p>
            <p>Free</p>
            <p>${getTotalamt()}</p>
          </div>
        </div>

        <button className='w-50 h-10 bg-red-400 rounded-lg font-semibold hover:bg-red-700 cursor-pointer'>PROCEED TO CHECKOUT</button>
      </div>
      </>
  )
}

export default Cartitem
