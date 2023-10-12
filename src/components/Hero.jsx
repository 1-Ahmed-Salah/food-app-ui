import imageHero from '../assets/pexels-jonathan-borba-2983098.jpg'

const Hero = () => {
  return (
    <div className="container mt-[60px]">
        <div  className='max-h-[400px] md:max-h-[500px] lg:max-h-[700px] relative rounded-xl shadow'>
            <div className='absolute text-gray-200 w-full h-full pl-[40px] flex items-center bg-black/50 rounded-xl'>
                <h1 className='text-[25px] lg:text-[40px] font-bold'>
                    The <span className='text-orange-500'>Best</span><br/>
                    <span className='text-orange-500'>Foods</span> Delivered
                </h1>
            </div>
            <img src={imageHero} alt="image-hero" className='w-full max-h-[400px] md:max-h-[500px] lg:max-h-[700px] object-cover rounded-xl' />
        </div>    
    </div>
  )
}

export default Hero