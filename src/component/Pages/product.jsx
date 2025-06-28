import React , {useContext}from 'react'
import {useParams} from 'react-router-dom'
import {Shopcontext} from '../shopcontext'
import Crum from '../crums/crums'
import ProductDisplay from '../productDisplay/productDisplay'
import Discription from '../discription/discription'
import Releted_product from '../releted_items/releted_product'

const Product = () => {
const {all_product}=useContext(Shopcontext)
const {productId}=useParams();

const product=all_product.find((e)=>e.id===Number(productId))


return(
  <div>
<Crum product={product}  />
<ProductDisplay product={product}/>
<Discription/>
<Releted_product/>
  </div>
)



}

export default Product
