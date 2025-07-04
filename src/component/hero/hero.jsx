// @ts-ignore
import img from '../../assets/hero-logo.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
// @ts-ignore
import Man from '../../assets/man.png'
const Hero = () => {
  return (
    <div className='bg-gradient-to-t from-inherit to-teal-300 to-lime-100 w-full h-70 md:h-auto flex justify-center  items-center '>
      <div className='flex flex-col gap-4 '>
        <h1 className='text-black md:text-4xl text-2xl font-extrabold'>Best deal ! Best prices !</h1>
    
      <div>
          <p className='text-black text-xl font-bold'>New</p>
             <img src={img} className='md:w-50 md:h-20 h-5 w-10'/>
      </div>
<div className='text-xl text-black'>
      <p>Collecctions</p>
      <p>For Everyone</p>
</div >
      <div className=' bg-red-500 font-semi-bold hover:bg-red-800 text-white flex flex-row justify-center text-center h-10 md:w-50 w-50 gap-5 rounded-2xl'>
        <button  className=''>Latest Collection 
</button>
<FaLongArrowAltRight className=' text-white mt-4'/>
        
      </div>

 </div>
      <div>
        <img src={Man} className='md:h-100 md:w-200 h-60 w-60'/>
      </div>
    </div>
  )
}

export default Hero
