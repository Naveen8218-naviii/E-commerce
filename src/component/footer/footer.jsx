import React from 'react'
import logo from '../../assets/logo.jpg'
import Insta from '../../assets/instagram.png'
import Fb from '../../assets/facebook.png'
import Whatsapp from '../../assets/whatsapp.png'
import { LuTwitter } from "react-icons/lu";


const Footer = () => {
  return (
    <>  
    <div className='flex justify-center items-center flex-col w-315 gap-10  h-100 w-100 relative bg-gradient-to-br from-stone-700 to-stone-100'>
      <div className='flex justify-center items-center '>
      <img src={logo} className='w-20 bg-black h-15'/>
      <h1 className='text-3xl font-bold'>ShopShine</h1>
    </div>

    <div>

        <ul className='flex text-gray-700 gap-10 justify-center text-xl'>
            <li>About</li>
            <li>Products</li>
            <li>Offices</li>
            <li>Company</li>
            <li>Contact</li>
        
        </ul>
 </div>

 <div>
        <ul className='flex text-gray-700 gap-5 justify-center'>
            <li><img src={Fb} className='h-6'/></li>
            <li><img src={Insta} className='h-6'/></li>
            <li><img src={Whatsapp} className='h-6'/></li>
            <li><LuTwitter  className='text-2xl text-black' /></li>
        </ul>
    </div>

    <hr className='border-3px solid-black w-300'/>
    <p className='text-black'>Copyright @2025 - All Rights Reserved</p>
    </div>
    </>

  )
}

export default Footer
