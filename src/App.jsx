
import React from 'react'
import Navbar from './component/navbar'
import './index.css'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Shop from './component/Pages/shop'
import Loginsignup from './component/Pages/loginsignup'
import Shopcategory from './component/Pages/shopcategoy'
import Product from './component/Pages/product'
import Footer from './component/footer/footer'
import Cart from './component/Pages/cart'
import manbanner from './assets/banner.jpg'
import womenbanner from './assets/women_banner.avif'
import kidsbanner from './assets/kids_banner.jpg'

const App = () => {
  return (
    <div className='w-full h-auto '>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/shop' element={<Shop/>}/>
         <Route path='/mens' element={<Shopcategory banner={manbanner} category={"men"}/>} />
          <Route path='/womens' element={<Shopcategory banner={womenbanner} category="women"/>}/>
           <Route path='/kids' element={<Shopcategory banner={kidsbanner} category="kid"/>}/>
           <Route path='/product' element={<Product/>}/>
           <Route path='/product/:productId' element={<Product/>}/>
           <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Loginsignup/>}/>
            
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
