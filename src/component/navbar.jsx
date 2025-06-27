
import React from 'react'
import {useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import {Shopcontext} from '../component/shopcontext'
import logo from '../assets/logo.jpg'
import { GiShoppingCart } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";

const Navbar = () => {
  const[menu,Setmenu]=useState(false)
  const {getTotalCart}=useContext(Shopcontext)
  return (
     <div className=' w-full  h-auto md:h-20 bg-black text-white flex  md:gap-70 items-center cursor-pointer justify-center' >

    
   
      <div className='flex items-center md:gap-5'>
        <img src={logo} className='w-20 bg-black h-15'/>
        <p className='font-bold md:text-3xl'>Shopshine</p>
    
      </div>

      <div>
        <ul className={`md:flex justify-center md:gap-8 md:text-lg ${menu?"block":"hidden"} `} >
            <li onClick={()=>{Setmenu("home")}} > <Link to={"/shop"}> Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{Setmenu("mens")}}><Link to={"/mens"}> Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{Setmenu("women")}}><Link to={"/womens"}> womens</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{Setmenu("kids")}}><Link to={"/kids"}> Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
  </div>
        <div className='flex items-center md:gap-10'>
           <Link to={"/login"}> <button className='bg-green-500 w-20 h-10 rounded-lg'> Login</button></Link>
           <div className='relative'>
            <p className='absolute -right-2 -top-2 w-6 rounded-full h-5 flex justify-center items-center font-semibold bg-red-500 text-white'> {getTotalCart()}</p> 
          <Link to={"/cart"}>  <GiShoppingCart className='w-10 bg-black h-10' /></Link>
          
         
            </div>
              <button className='md:hidden ' onClick={()=>Setmenu(!menu)}>
     {menu?  <IoCloseCircle className='text-2xl'/>:<IoMenu className='text-2xl' />}
</button>
        </div>

     
    </div>
    
  )
}

export default Navbar
