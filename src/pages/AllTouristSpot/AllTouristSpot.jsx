import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import TouristSpotCard from "../../components/TouristSpotCard/TouristSpotCard";


const AllTouristSpot = () => {
    const touristSpots = useLoaderData();
    console.log(touristSpots);
    return (
        <div>
            <div className='bg-[url("https://i.ibb.co/yqGfgzK/bear-box.jpg")] h-[80vh] bg-cover bg-top relative'>
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000099]">
          <Navbar></Navbar>

          {/* add Tourist Spot banner */}
          <div className="flex justify-center items-center lg:w-2/4 md:w-2/4 w-2/3 mx-auto h-full">
            <div className="p-6 rounded-md text-center space-y-2 border-2 border-green-500">
              <h3 className="text-4xl font-bold uppercase text-green-500">
                All Tourists Spot
              </h3>
              <div className="flex justify-center items-center gap-2">
                <Link
                  to={"/"}
                  className="text-xl font-medium text-white hover:text-green-500 duration-300"
                >
                  Home
                </Link>
                <div className="flex justify-center items-center gap-1">
                  <span className="text-white text-xl font-medium">
                    <MdOutlineKeyboardDoubleArrowRight />
                  </span>
                  <p className="text-xl font-medium text-white">All Tourist Place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* all tourist spot card */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-7 items-center my-8 container mx-auto px-4">
          {
              touristSpots.map(spots => <TouristSpotCard key={spots._id} spots={spots}></TouristSpotCard>)
          }
        </div>

        </div>
    );
};

export default AllTouristSpot;