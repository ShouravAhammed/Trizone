import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyListCard = ({item, control, setControl}) => {

   console.log(item);
   const {_id, touristPlaceName, countryName, travelTime, averageCost} = item

   const handlePlaceDelete = (id) => {
        console.log('Delete SuccessFully', id)

        Swal.fire({
            title: "Are you sure?",
            text: "You Delete Your Coffee Card!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(result => {
            if(result.isConfirmed){

            fetch(`https://assignment-10-tmw-southeast-asia-server.vercel.app/myPlaces/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire(
                "Deleted!",
                "Your Coffee Card is Deleted.",
                "success"
              );
            setControl(!control)
        })
            }
          })
   }

    
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 p-5 border border-green-300 items-center">
                <p>{touristPlaceName}</p>
                <p>{countryName}</p>
                <p>{travelTime}</p>
                <p>{averageCost}{averageCost ? 'tk' : ''}</p>
                <div className="flex justify-start items-center gap-2">
                    <Link to={`/updatePlace/${_id}`}><button className="btn">Update</button></Link>
                    <button onClick={() => handlePlaceDelete(_id)} className="btn">Delete</button>
                    </div>
  
</div>
    );
};

export default MyListCard;