import React from 'react'
import {createContext,useState} from 'react'
import all_product from '../assets/allproduct'

export const Shopcontext= createContext(null)

const getDefaultCart = () =>{
      let cart={};
      for (let index=0; index<all_product.length+1; index++) {
        cart[index]=0;
      }
      
      
      return  cart;
    }
      
const ShopcontextPro = (props) => {

  const [cartItems,setCartItems]=useState(getDefaultCart())
    
console.log(cartItems);

    const addtoCart=(itemId)=>{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
console.log(cartItems);


    }

    const removetoCart=(itemId)=>{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
const contextValue={all_product , cartItems , addtoCart , removetoCart}
    
      return (
   
    <Shopcontext.Provider  value={contextValue}>
{props.children}
    </Shopcontext.Provider>
  )

   
    

    }



export default ShopcontextPro

