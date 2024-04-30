
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import {  EffectFade, Pagination, Navigation } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

const SwiperSlider = () => {


    // const handleType = (count, number) => {
    //     console.log(count);
    // }
    
    //   const handleDone = () => {
    //     console.log(`Done after 5 loops!`)
    //   }







    return (
        <Swiper
        spaceBetween={0}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='bg-[url("https://i.ibb.co/KmYghC6/may-courtyard-narrow-city-china.jpg")] h-screen w-screen bg-cover bg-center relative'>
                <div className='absolute top-0 left-0 w-full h-full bg-[#00000099]'>
                    <div className='flex justify-center items-center md:w-3/5 w-full text-center mx-auto h-full flex-col gap-5'>
                        <h2 className='text-7xl text-green-500 font-extrabold uppercase' >Life is <span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Travels', 'Inspire', 'Tour']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={100}
            delaySpeed={2000}
          />
        </span></h2>
                            <p className='text-xl font-medium text-white'>Where Every Journey Begins with Passion. Embrace the World, Inspire Adventures, and Create Memorable Experiences. Join Us in Crafting Destinations, Connecting Cultures, and Shaping Unforgettable Memories for Travelers Worldwide.
                            </p>   
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-[url("https://i.ibb.co/K0DVVsy/parachute.jpg")] h-screen bg-cover bg-top relative'>
                <div className='absolute top-0 left-0 w-full h-full bg-[#00000099]'>
                <div className='flex justify-center items-center md:w-3/5 w-full text-center mx-auto h-full flex-col gap-5'>
                        <h2 className='text-7xl text-green-500 font-extrabold uppercase'>Inspiring Adventures for Travelers</h2>
                            <p className='text-xl font-medium text-white'>Where Every Journey Begins with Passion. Embrace the World, Inspire Adventures, and Create Memorable Experiences. Join Us in Crafting Destinations, Connecting Cultures, and Shaping Unforgettable Memories for Travelers Worldwide.
                            </p>   
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-[url("https://i.ibb.co/8PSWxKC/iran-6791756-1280.jpg")] h-screen bg-cover bg-center relative'>
                <div className='absolute top-0 left-0 w-full h-full bg-[#0000007D]'></div>
            </div>
        </SwiperSlide>
      </Swiper>
    );
};

export default SwiperSlider;