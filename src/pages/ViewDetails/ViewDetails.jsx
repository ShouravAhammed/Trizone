import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { IoLocation } from "react-icons/io5";


const ViewDetails = () => { 
    const {id} = useParams();
    // console.log(id);
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`https://assignment-10-tmw-southeast-asia-server.vercel.app/viewDetails/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setDetails(data)
        })
    }, [id])

    // console.log(details);
    const {touristPlaceName, placeImage, countryName, averageCost, location, seasonality, shortDescription, totalVisitorsPerYear, travelTime,} = details || {}

    return (
        <div className="">
            <div className="bg-gray-500">
                <Navbar></Navbar>
            </div>
            <div className="lg:w-3/4 md:w-2/3 w-full my-10 p-8 mx-auto border-2 border-green-500 rounded-lg">
                    <div className="flex justify-center gap-8 items-center lg:flex-row md:flex-col flex-col">
                        <div className="flex-1">
                            <img className="rounded-xl" src={placeImage} alt="" />
                        </div>
                        <div className="flex-1 space-y-3">
                            <div className="flex md:justify-between lg:items-center items-start">
                            <h3 className="text-2xl font-bold uppercase text-green-500">{touristPlaceName}</h3>
                            <p className="text-base font-normal">{countryName}</p>
                            </div>
                            <p className="text-base font-medium">{shortDescription}</p>
                            <p className="text-base font-medium">Seasonality: {seasonality}</p>
                            <div className="flex justify-between items-center">
                            <p className="text-base font-medium flex items-center gap-1"><span className="text-xl"><IoLocation /></span>{location}</p>
                            <p className="text-base font-medium">{travelTime} {travelTime < 3 ? 'Weeks' : 'days'}</p>
                            </div>
                            <div className="flex justify-between items-center">
                            <p className="text-base font-bold"><span>{averageCost}tk</span> (Per Person)</p>
                            <p className="text-base font-medium">Total travel per year: {totalVisitorsPerYear}</p>
                            </div>

                        </div>
                    </div>
            </div>
        </div>
    );
};

export default ViewDetails;