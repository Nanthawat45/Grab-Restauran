//import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2';
import RestaurantService from '../services/restaurant.service';

const Add = () => {
  const [restaurant, setRestaurant] =useState({
    title:"",
    type:"",
    img:"",
  });
  const handleChange =(e) =>{
    const {name, value} = e.target;
    setRestaurant({...restaurant,[name]:value})
  }
  const handSubmit = async () =>{
    try {
      const response = await RestaurantService.insertRestaurant
      (restaurant)
      if(response === 200){
        Swal.fire({
          title: "Add Restaurant",
          text: "Restaurant added successfully",
          icon: "success",
        });
        setRestaurant({
          name:"",
          type:"",
          imageUrl:"",
        });
      }
    }catch(error){
      Swal.fire({
        title: "Add Restaurant",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  }
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-2 text-center">Add Restaurant</h1>
      </div>
      <div className="space-y-2">
        <label className="input input-bordered flex items-center gap-2">
          Title
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="title"
            onChange={handleChange}
            value={restaurant.title}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Type
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="type"
            onChange={handleChange}
            value={restaurant.type}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          img
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="img"
            onChange={handleChange}
            value={restaurant.img}
          />
        </label>
        <button className='btn btn-success' onClick={handSubmit}>Add Restaurant</button>
      </div>
    </div>
  );
}

export default Add