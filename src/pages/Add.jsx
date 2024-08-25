
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import RestaurantService from '../services/restaurant.service';
import { useAuthContext } from "../context/AuthContext";

const Add = () => {
  const navigate = useNavigate();
  const [restaurant, setRestaurant] =useState({
    title:"",
    type:"",
    imageUrl:"",
  });
  const handleChange =(e) =>{
    const {name, value} = e.target;
    
    setRestaurant({...restaurant,[name]:value })
  };
  const handSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await RestaurantService.addRestaurant
      (restaurant)
      if(response.status === 200){
        Swal.fire({
          title: "Add Restaurant",
          text: "Restaurant added successfully",
          icon: "success",
        }) .then(() => {
          setRestaurant({ name: "", type: "", imgUrl: "" });
          navigate("/");
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
            name="imageUrl"
            id="imgInput"
            type="text"
            placeholder="Input image link here :"
            className="input input-bordered w-full max-w-lg my-3"
            onChange={handleChange}
            value={restaurant.imageUrl}
          />
        </label>
        <button className='btn btn-success' onClick={handSubmit}>
          Add Restaurant
          </button>
      </div>
    </div>
  );
}

export default Add