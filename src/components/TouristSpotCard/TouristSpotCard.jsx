import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";



const TouristSpotCard = ({spots}) => {
    const {_id, placeImage, touristPlaceName, seasonality, location, totalVisitorsPerYear, averageCost, travelTime} = spots
    return (
        <div className="col-span-1">
            <div className="border-2 border-green-200 hover:shadow-xl duration-300 rounded-xl">
                    <div className="">
                    <img className="rounded-t-lg" src={placeImage} alt="Place Image" />
                    </div>
                    <div className="p-5 bg-transparent space-y-2">
                            <h3 className="text-2xl font-bold uppercase text-green-500">{touristPlaceName}</h3>
                            <p className="text-base font-medium">{seasonality}</p>
                           <div className="flex justify-between items-center gap-2">
                           <p className="text-base font-medium flex gap-1 items-center"><span className="text-xl"><IoLocation /></span> <span>{location}</span></p>
                            <p className="font-medium text-base">Total Travel: {totalVisitorsPerYear}</p>
                            
                           </div>
                            <div className="flex justify-between items-center gap-2">
                            <p className="font-medium text-base"><span className=" font-bold">{averageCost}tk</span> (Per Person)</p>
                            <p className="font-medium text-base">{travelTime} {travelTime > 3 ? 'day' : 'week'}</p>
                            </div>  

                           <Link to={`/viewDetails/${_id}`}> <button className="mt-5 relative inline-flex items-center justify-center py-3 px-2 w-full overflow-hidden font-medium uppercase text-green-500 transition duration-300 ease-out rounded-md shadow-lg group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease text-base">
              VIEW DETAILS
              </span>
              <span className="absolute flex items-center justify-center w-full bg-green-500 h-full text-white transition-all duration-300 transform group-hover:translate-x-full text-base ease">
              view Details
              </span>
              <span className="relative invisible">
              VIEW DETAILS
              </span>
            </button></Link>
                    </div>
                    
            </div>
        </div>
    );
};

export default TouristSpotCard;