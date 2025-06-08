import React from 'react'
import {createContext} from 'react'
import all_product from '../assets/allproduct'

export const Shopcontext= createContext(null)
const ShopcontextPro = (props) => {
    const contextValue={all_product}
  return (
   
    <Shopcontext.Provider  value={contextValue}>
{props.children}
    </Shopcontext.Provider>
  )
}

export default ShopcontextPro

