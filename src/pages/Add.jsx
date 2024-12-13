
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import RestaurantService from '../services/restaurant.service';
import { useAuthContext } from "../context/AuthContext";

const Add = () => {
  
  const [restaurant, setRestaurant] =useState({
    //มันเป็น name ไม่ใช่ title มันไม่ตรงกับฐานข้อมูลแล้วมันจะ แอดข้อมูลเข้าไปได้ไหมล่าาา!
    name:"",
    type:"",
    imageUrl:"",
  });
  const navigate = useNavigate();
  const handleChange =(e) =>{
    const {name, value} = e.target;
    
    setRestaurant({...restaurant,[name]:value })
  };
  const handSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await RestaurantService.addRestaurant(restaurant);
      console.log(response);
      
      if(response.status === 200){
        Swal.fire({
          title: "Add Restaurant",
          text: "Restaurant added successfully",
          icon: "success",
        }) .then(() => {
          setRestaurant({ name: "", type: "", imageUrl: "" });
          navigate("/");
        });
      }
      
    }catch(error){
      Swal.fire({
        title: "Fail to add Restaurant",
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
            required
            id="name"
            className="grow"
            placeholder="Restaurant Name"
            name="name"
            onChange={handleChange}
            value={restaurant.name}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Type
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="type"
            id="type"
            onChange={handleChange}
            value={restaurant.type}
          />
        </label>
         
           <h3 htmlFor="imageUrl">Image</h3>
           {restaurant.imageUrl && (
                        <div className="flex items-center gap-2 py-4">
                          <img src={restaurant.imageUrl} className="h-32" alt="" />
                        </div>
                      )}
        <label className="input input-bordered flex items-center gap-2">
       
          img
          <input
            name="imageUrl"
            id="imageUrl"
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