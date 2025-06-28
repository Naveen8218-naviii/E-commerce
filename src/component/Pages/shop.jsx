import React from 'react'
import Hero from '../../component/hero/hero'
import Popular from '../../popular'
import Offers from '../offers/offers'
import Newcollection from '../../newcollections/newcollection'
import NewsLatter from '../../newLatter/newslatter'
const Shop = () => {
  return (
    <div className=''>
      
      <Hero/>
      <Popular />
      <Offers/>
      <Newcollection/>
      <NewsLatter/>
      
    </div>
  )
}

export default Shop
