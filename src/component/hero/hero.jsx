// @ts-ignore
import img from '../../assets/hero-logo.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
// @ts-ignore
import Man from '../../assets/man.png'
const Hero = () => {
  return (
<<<<<<< HEAD
    <div className='bg-gradient-to-t from-inherit to-teal-300 to-lime-100 w-full h-120 flex justify-center  items-center'>
=======
    <div className='bg-gradient-to-t from-inherit to-teal-300 to-lime-100 w-314 h-120 flex justify-center  items-center'>
>>>>>>> f7a469e5b7391d9c7c89314380b17b6091dc2665
      <div className='flex flex-col gap-4'>
        <h1 className='text-black text-4xl font-extrabold'>Best deal ! Best prices !</h1>
    
      <div>
          <p className='text-black text-xl font-bold'>New</p>
             <img src={img} className='w-50 h-20'/>
      </div>
<<<<<<< HEAD
<div className='md:text-xl text-black text-lg'>
=======
<div className='text-xl text-black'>
>>>>>>> f7a469e5b7391d9c7c89314380b17b6091dc2665
      <p>Collecctions</p>
      <p>For Everyone</p>
</div >
      <div className=' bg-red-500 font-semi-bold hover:bg-red-800 text-white flex flex-row justify-center text-center h-10 w-50 gap-5 rounded-2xl'>
        <button  className=''>Latest Collection 
</button>
<FaLongArrowAltRight className=' text-white mt-4'/>
        
      </div>

 </div>
      <div>
        <img src={Man} className='h-100 w-200'/>
      </div>
    </div>
  )
}

export default Hero
