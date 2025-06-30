
import React from 'react'
import {useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import {Shopcontext} from '../component/shopcontext'
import logo from '../assets/logo.jpg'
import { GiShoppingCart } from "react-icons/gi";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const[menu,Setmenu]=useState("menu")
  const [open, setOpen] = useState(false)
  const {getTotalCart}=useContext(Shopcontext)
  return (
    <div className=' w-full md:h-20 h-auto bg-black text-white grid md:flex justify-center md:gap-40 gap-5 items-center cursor-pointer px-4 py-5 ' >
      <div className='flex items-center gap-6 '>
        <div className='flex justify-center items-center gap-1'>
        <img src={logo} className='w-10 bg-black h-8 md:w-15 md:h-10'/>
        <p className='font-bold text-xl md:text-3xl'>shopshine</p>
</div>
               
                  <div className=' md:hidden flex items-center gap-3'>
           <Link to={"/login"}> <button className='bg-green-500 w-15 h-8 rounded-lg'> Login</button></Link>
           <div className='relative'>
            <p className='absolute -right-2 -top-2 w-4 rounded-full h-3 flex justify-center items-center font-semibold bg-red-500 text-white'> {getTotalCart()}</p> 
          <Link to={"/cart"}>  <GiShoppingCart className='w-10 bg-black h-10' /></Link>
          
            </div>
       
      
      <button onClick={()=>setOpen(!open)} className='md:hidden text-2xl'>
<FaBars />
      </button>
     </div>
      </div>

      <div>
        <ul className={`md:flex md:justify-center grid place-items-center gap-5 ${open?'grid':'hidden'} text-2xl md:text-xl bg-black `}>
            <li onClick={()=>{Setmenu("home")}} > <Link to={"/shop"}> Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{Setmenu("mens")}}><Link to={"/mens"}> Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{Setmenu("women")}}><Link to={"/womens"}> womens</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{Setmenu("kids")}}><Link to={"/kids"}> Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
  </div>
        <div className=' hidden md:flex md:items-center md:gap-10'>
           <Link to={"/login"}> <button className='bg-green-500 w-20 h-10 rounded-lg'> Login</button></Link>
           <div className='relative'>
            <p className='absolute -right-2 -top-2 w-6 rounded-full h-5 flex justify-center items-center font-semibold bg-red-500 text-white'> {getTotalCart()}</p> 
          <Link to={"/cart"}>  <GiShoppingCart className='w-10 bg-black h-10' /></Link>
          
            </div>
       
        </div>

   
    </div>
  )
}

export default Navbar
