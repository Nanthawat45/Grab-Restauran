import React from "react";
import {useAuthContext} from "../context/AuthContext"
import RestaurantService from "../services/restaurant.service";
const Box = ({id, imageUrl, name, type }) => {
  const handleDelete = async (id) =>{
    try {
      const response = await  RestaurantService.editRestaurant(id,response)
    if(response === 200){
        Swal.fire({
          title: "Restaurant update",
          text: response.data.message,
          icon: "success",
        });
      }
    }catch(error){
      Swal.fire({
        title: "Add Restaurant",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    };
  }
  return (
    <div
      className="card card-compact w-72 bg-base-100 shadow-xl h-96"
      id="card"
    >
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{type}</p>
        <div className="card-actions justify-end">

          {user && 
          (user.roles.includes("ROLES_MODERATOR") ||
          user.roles.includes("ROLES_ADMIN")) &&(
            <div className="card-actions justify-end">
              {user.reload.includes("ROLES_ADMIN")&&(
                <button
                className="btn btn-error"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
              )}
      
              <a href={`/edit/${id}`} className="btn btn-primary">
                Edit
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Box;
