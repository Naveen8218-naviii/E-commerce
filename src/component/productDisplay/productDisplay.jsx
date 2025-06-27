import React ,{useContext}from 'react'
import star_icon from '../../assets/star_icon.png'
import{ Shopcontext} from '../../component/shopcontext'

const ProductDisplay = (props) => {
    const {product}=props;
    const { addtoCart}= useContext(Shopcontext);
   
  return (
<<<<<<< HEAD
    <div className='w-full  h-auto flex gap-5 text-black ml-10'>
=======
    <div className='w-303  h-auto flex gap-5 text-black ml-10'>
>>>>>>> f7a469e5b7391d9c7c89314380b17b6091dc2665
      <div className='flex gap-10'>
        <div className='flex flex-col gap-3'>
            <img src={product.image} className='w-20 h-28'/>
            <img src={product.image} className='w-20 h-28'/>
            <img src={product.image}className='w-20 h-28'/>
            <img src={product.image} className='w-20 h-28'/>
        </div>
        <div>
             <img src={product.image} className='h-120 w-80'/>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h1 className='text-4xl'>{product.name}</h1>
        <div className='flex'>
<img src={star_icon} className='h-5 w-5'/>
<img src={star_icon} className='h-5 w-5'/>
<img src={star_icon} className='h-5 w-5'/>
<img src={star_icon} className='h-5 w-5'/>
<img src={star_icon} className='h-5 w-5'/>
<p>(130)</p>
        </div>

        <div className='flex  gap-5 font-bold'>
        
           <p className='text-red-600 '> ${product.new_price}</p>
            
          <p className=''>  ${product.old_price}</p>
        </div>
<p className='font-semibold'>Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit.   
    Dolorum ex et quae numquam, non minima,<br></br> ea repellendus harum 
    reprehenderit aliquid eligendi pariatur.<br></br>
     Porro illo quam temporibus quidem, voluptates tempora natus!</p>

     <div className='flex flex-col gap-4'>
        <p className='text-xl'>Select size</p>
       <div className='flex gap-4'> <button className='w-8 h-8 border-1 hover:bg-gray-300 rounded-lg'>S</button>
        <button className='w-8 h-8 border-1 hover:bg-gray-300 rounded-lg '>M</button>
        <button className='w-8 h-8 border-1 hover:bg-gray-300 rounded-lg'>L</button>
        <button className='w-8 h-8 border-1 hover:bg-gray-300 rounded-lg'>XL</button>
        <button className='w-8 h-8 border-1 hover:bg-gray-300 rounded-lg'>XXL</button>
    
        </div>
     </div>

     <button className='h-10 w-80 bg-red-400 rounded-lg mt-4 hover:bg-red-700' onClick={()=>{addtoCart(product.id)}}>Add to cart</button>

      <div className='font-semibold'>
       <p> Category : Women , T-Shirt , Crop top</p>
       <p>Tags : Modern , Latest , Trend Shorts</p>
      </div>
      </div>

    </div>
  )
}

export default ProductDisplay
