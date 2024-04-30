
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Shared/Navbar/Navbar'
import TouristSpotCard from '../../components/TouristSpotCard/TouristSpotCard';
import { MdSubscriptions } from 'react-icons/md';

const Home = () => {
    const touristSpots = useLoaderData();
    console.log(touristSpots);





    return (
        <div className='relative'>
            <div className='absolute top-0 left-0 w-full z-20'><Navbar></Navbar></div>
            <div>
            <Banner></Banner>
            </div>
            <div className='container mx-auto px-4'>
            <div className='my-14'>
                <h3 className='text-4xl text-green-500 font-bold text-center my-5 pb-4 border-b border-green-200'>All Tourists Spot</h3>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-7 items-center">
          {
              touristSpots.map(spots => <TouristSpotCard key={spots._id} spots={spots}></TouristSpotCard>)
          }
        </div>
        </div>
            </div>

          {/* news letter */}
          <div className='my-10'>
          <div className='my-5'>
          <h3 className='text-4xl text-green-500 font-bold text-center'>Our News</h3>
          <p className='font-medium text-center'>Subscribe Our News</p>
          </div>
            <div className='border border-green-500 lg:w-2/4 rounded-md md:w-full w-full  p-8 mx-auto'>
            <div className=' flex justify-center items-center'>
                <input type="email" id='' name='email' placeholder='Enter your email' className='bg-transparent p-5 flex-1 duration-300 outline-green-500 border border-green-500 rounded-md rounded-r-none'/>
                
                <button className="relative inline-flex items-center rounded-l-none justify-center py-5 px-6 overflow-hidden font-medium uppercase text-green-500 transition duration-300 ease-out rounded-md shadow-lg group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease text-3xl">
              <MdSubscriptions />
              </span>
              <span className="absolute flex items-center justify-center w-full bg-green-500 h-full text-white transition-all duration-300 transform group-hover:translate-x-full text-xl ease">
              Subscribe
              </span>
              <span className="relative invisible">
              subscribe
              </span>
            </button>

            </div>  
                </div>       
          </div>
          
          
        </div>
    );
};

export default Home;