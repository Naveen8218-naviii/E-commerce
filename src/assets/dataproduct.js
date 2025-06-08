// @ts-ignore
import p1_img from '../assets/p1.jfif'
// @ts-ignore
import p2_img from '../assets/p2.jfif'
// @ts-ignore
import p3_img from '../assets/p3.avif'
// @ts-ignore
import p4_img from '../assets/p4.jfif'

let data_product= [
     {
            id: 1,
            name: "Kurti",
            category: "women",
            img: p1_img,
            new_price: 50.0,
            old_price: 80.5
        },
    
        { id: 2, name: "Jeans", category: "men", img:p2_img, new_price: 60.0, old_price: 90.5 },
        { id: 3, name: "Saree", category: "women", img:p3_img, new_price: 75.0, old_price: 120.0 },
        { id: 4, name: "Jacket", category: "men", img: p4_img, new_price: 90.0, old_price: 140.0 }
]

export default data_product;