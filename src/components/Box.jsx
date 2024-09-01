import React from "react";
import {useAuthContext} from "../context/AuthContext"
import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";

const Box = ({id, imageUrl, name, type }) => {
  const { user } = useAuthContext();

  const handleDelete = async (id) =>{
    try {
      //ไม่ใช่ RestaueantService.editRestaurant(id) เป็น RestaurantService.deleteRestaurant(id) ไปดูฟังก์ชัน api in restaurant.service 
      const response = await  RestaurantService.deleteRestaurant(id)
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: response.data.message,
          position: "center",
          timer: 7000,
        }).then(() => {
          window.location.reload();
        });
      }
    }catch(error){
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Restaurant Delete`,
        text: error?.response?.data?.message,
        timer: 1500,
      });
    };
  };
  return (
      <div className="card bg-base-100 shadow-xl m-3 w-72 h-96" id="card">
        <figure>
          <img src={imageUrl} alt="" className="rounded w-72 h-48" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm">{name}</h2>
          <p className="text-sm">{type}</p>
          {user &&
            (user.roles.includes("ROLES_MODERATOR") ||
              user.roles.includes("ROLES_ADMIN")) && (
              <div className="card-actions justify-center">
                <a
                  href={`/edit/${id}`}
                  className="btn btn-outline btn-warning btn-sm"
                >
                  Edit
                </a>
                {user.roles.includes("ROLES_ADMIN") && (
                  <button
                    className="btn btn-outline btn-error btn-sm"
                    onClick={() => handleDelete(id)}
                  >
                   Delete
                  </button>
                )}
              </div>
            )}
        </div>
      </div>
    );
  };

export default Box;
