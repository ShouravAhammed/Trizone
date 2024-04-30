import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyListCard from '../../components/MyListCard/MyListCard';
import Navbar from '../../components/Shared/Navbar/Navbar';

const MyList = () => {

  const {user} = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [control, setControl] = useState(false);
  

  useEffect(() => {
    fetch(`http://localhost:5000/myPlaces/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setItems(data)
    })
  }, [user, control])


  return (
    <div className=''>
      <div className='bg-gray-500'>
        <Navbar></Navbar>
      </div>
      <div className='container mx-auto px-2'>
      <h3 className='text-3xl font-bold uppercase my-7 text-green-500 text-center'>My List</h3>
             <div className='grid grid-cols-5 justify-center items-center p-5 border border-gray-300'>
              <h3>Tourist Spot</h3>
              <h3>Country</h3>
              <h3>Travel Time</h3>
              <h3>Average Cost</h3>
              <h3>Action</h3>
             </div>
             <div>
             <div className=''>
             {
              items.map(item => <MyListCard key={item._id} item={item} control={control} setControl={setControl}></MyListCard>)
             }
             </div>
             </div>
      </div>
    </div>
  );
};

export default MyList;