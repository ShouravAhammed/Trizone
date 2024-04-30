import { useEffect, useState } from "react";
import { MdOutlineDownloadDone } from "react-icons/md";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePlace = () => {

    const {id} = useParams();
    console.log(id);
    const [places, setPlaces] = useState({});

    useEffect(() => {
        fetch(`https://assignment-10-tmw-southeast-asia-server.vercel.app/place/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPlaces(data)
        })
    }, [id])

    const {touristPlaceName, countryName, travelTime, averageCost} =  places 

    const handleUpdatePlace = (e) => {
        e.preventDefault();
        const form = e.target;
    const touristPlaceName = form.tourist.value;
    const countryName = form.country.value;
    const travelTime = form.time.value;
    const averageCost = form.cost.value;
    const updateInfo = {touristPlaceName, countryName, travelTime, averageCost}
    console.log(updateInfo);

    fetch(`https://assignment-10-tmw-southeast-asia-server.vercel.app/updatePlace/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateInfo)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            Swal.fire({
                title: "Updated Place",
                text: "Updated Successfully",
                icon: "success"
              });
        }
    })
    }
    return (
        <div>
            <div className="md:w-2/3 p-6 w-full mx-auto border-2 border-green-500 rounded-md space-y-3">
          <div className="">
            <h3 className="text-3xl font-bold text-green-500 mb-7">
              Update Tourists Spot
            </h3>
          </div>
          

          {/* login form */}
          <form onSubmit={handleUpdatePlace} className="py-8 border-y border-green-300 w-full space-y-4">
            <div className="flex justify-center items-center gap-5">
            <div className="w-full flex flex-col justify-center gap-2">
              <label className="text-base text-green-500 font-medium">
                Tourist Spot Name
              </label>
              <input
                type="text"
                name="tourist"
                id="tourist"
                className="p-3 bg-transparent duration-300 outline-green-500 border border-gray-300 hover:border-transparent rounded-md"
                placeholder="Tourist place" defaultValue={touristPlaceName} required
              />
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
              <label className="text-base text-green-500 font-medium">
                Country
              </label>
              <div className="relative w-full">
              <input
                type="text"
                name="country"
                id="country"
                className="p-3 bg-transparent w-full duration-300 outline-green-500 border border-gray-300 hover:border-transparent rounded-md"
                placeholder="Country" defaultValue={countryName} required
              />
              </div>
            </div>
            </div>
            



            <div className="flex justify-center items-center gap-5">
            <div className="w-full flex flex-col justify-center gap-2">
              <label className="text-base text-green-500 font-medium">
                Travel Time
              </label>
              <input
                type="text"
                name="time"
                id="time"
                className="p-3 bg-transparent duration-300 outline-green-500 border border-gray-300 hover:border-transparent rounded-md"
                placeholder="Travel Time" defaultValue={travelTime}  required
              />
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
              <label className="text-base text-green-500 font-medium">
                Average Cost
              </label>
              <div className="relative w-full">
              <input
                type="text"
                name="cost"
                id="cost"
                className="p-3 bg-transparent w-full duration-300 outline-green-500 border border-gray-300 hover:border-transparent rounded-md"
                placeholder="Average cost" defaultValue={averageCost} required
              />
              </div>
            </div>
            </div>


            <button className="relative inline-flex items-center justify-center py-4 px-6 w-full overflow-hidden font-medium uppercase text-green-500 transition duration-300 ease-out rounded-md shadow-lg group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease text-3xl">
              <MdOutlineDownloadDone />
              </span>
              <span className="absolute flex items-center justify-center w-full bg-green-500 h-full text-white transition-all duration-300 transform group-hover:translate-x-full text-xl ease">
              Update Place
              </span>
              <span className="relative invisible">
              Update Place
              </span>
            </button>
          </form>
        </div>
        </div>
    );
};

export default UpdatePlace;