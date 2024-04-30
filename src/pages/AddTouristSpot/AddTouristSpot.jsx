import { MdOutlineDownloadDone, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const AddTouristSpot = () => {
  const {user} = useContext(AuthContext)


  const handleAddTouristPlace = (e) => {
    e.preventDefault();

    const form = e.target;
    const userEmail = user.email;
    const touristPlaceName = form.tourist.value;
    const countryName = form.country.value;
    const location = form.location.value;
    const totalVisitorsPerYear = form.total.value;
    const placeImage = form.image.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.time.value;
    const averageCost = form.cost.value;
    const shortDescription = form.description.value;
    const placeInfo = {userEmail, touristPlaceName, countryName, location, totalVisitorsPerYear, placeImage, seasonality, travelTime, averageCost, shortDescription}
    console.log(placeInfo);


    fetch('http://localhost:5000/addPlaces', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(placeInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: "Added Place",
          text: "Successfully Added",
          icon: "success"
        });
        form.reset();
      }
    })
  }
    return (
        <div>
            <div className='bg-[url("https://i.ibb.co/yqGfgzK/bear-box.jpg")] h-[80vh] bg-cover bg-top relative'>
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000099]">
          <Navbar></Navbar>

          {/* add Tourist Spot banner */}
          <div className="flex justify-center items-center lg:w-1/5 md:w-2/3 w-2/3 mx-auto h-full">
            <div className="p-6 rounded-md text-center space-y-2 border-2 border-green-500">
              <h3 className="text-4xl font-bold uppercase text-green-500">
                Add Tourists Spot
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
                  <p className="text-xl font-medium text-white">Add Tourist Place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* add Tourist place  */}

      <div className="container mx-auto px-4 my-28">
        <div className="md:w-2/3 p-6 w-full mx-auto border-2 border-green-500 rounded-md space-y-3">
          <div className="">
            <h3 className="text-3xl font-bold text-green-500 mb-7">
              Add Tourist Place
            </h3>
          </div>
          

          {/* login form */}
          <form onSubmit={handleAddTouristPlace} className="py-8 border-y border-green-300 w-full space-y-4">
            <div className="flex justify-center items-center gap-5">
            <div className="w-full flex flex-col justify-center gap-2">
              <label className="text-base text-green-500 font-medium">
                Tourists Spot name
              </label>
              <input
                type="text"
                name="tourist"
                id="tourist"
                className="p-3 bg-transparent duration-300 outline-green-500 border border-gray-300 hover:border-transparent rounded-md"
                placeholder="Tourist place" required
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
                placeholder="Country" required
              />
              </div>
            </div>
            </div>
            <div className="flex justify-center items-center gap-5">
            <div className="w-full flex flex-col justify-center gap-2">
              <label className="text-base text-green-500 font-medium">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="p-3 bg-transparent duration-300 outline-green-500 border border-gray-300 hover:border-transparent rounded-md"
                placeholder="Location" required
              />
            </div>


            <div className="w-full flex flex-col justify-center gap-2">
              <label className="text-base text-green-500 font-medium">
                Total Visitors Per Year
              </label>
              <input
                type="text"
                name="total"
                id="total"
                className="p-3 bg-transparent duration-300 outline-green-500 border border-gray-300 hover:border-transparent rounded-md"
                placeholder="total visitors per year" required
              />
            </div>
          </div>


            <div className="flex justify-center items-center gap-5">
            <div className="w-full flex flex-col justify-center gap-2">
              <label className="text-base text-green-500 font-medium">
                Place Image
              </label>
              <input
                type="text"
                name="image"
                id="image"
                className="p-3 bg-transparent duration-300 outline-green-500 border border-gray-300 hover:border-transparent rounded-md"
                placeholder="Place image" required
              />
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
              <label className="text-base text-green-500 font-medium">
                Seasonality
              </label>
              <div className="relative w-full">
              <input
                type="text"
                name="seasonality"
                id="seasonality"
                className="p-3 bg-transparent w-full duration-300 outline-green-500 border border-gray-300 hover:border-transparent rounded-md"
                placeholder="Seasonality" required
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
                placeholder="Travel Time" required
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
                placeholder="average cost" required
              />
              </div>
            </div>
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
              <label className="text-base text-green-500 font-medium">
                Description
              </label>
              <div className="relative w-full">
              <input
                type="text"
                name="description"
                id="description"
                className="p-3 bg-transparent w-full duration-300 outline-green-500 border border-gray-300 hover:border-transparent rounded-md"
                placeholder="Short Description" required
              />
              </div>
            </div>

            

            <button className="relative inline-flex items-center justify-center py-4 px-6 w-full overflow-hidden font-medium uppercase text-green-500 transition duration-300 ease-out rounded-md shadow-lg group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease text-3xl">
              <MdOutlineDownloadDone />
              </span>
              <span className="absolute flex items-center justify-center w-full bg-green-500 h-full text-white transition-all duration-300 transform group-hover:translate-x-full text-xl ease">
              Add Place
              </span>
              <span className="relative invisible">
              Add Place
              </span>
            </button>
          </form>
        </div>
      </div>


      
        </div>
    );
};

export default AddTouristSpot;