import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";
import { useAuthContext } from "../context/AuthContext";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    imageUrl: "",
  });
  useEffect(() => {
    RestaurantService.getRestarantById(id).then((response)=>{
      if(response.status === 200){
        setRestaurant(response.data);
      }
    })
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setRestaurant({ ...restaurant, [name]: value });
  };
  const handSubmit = async () => {
    try {
      //TODO
      const response = await  RestaurantService.editRestaurant(id, restaurant);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Restaurant Update`,
          text: response.data.message,
          timer: 1500,
        });
      }
        navigate("/")
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Restaurant Update`,
        text: error?.response?.data?.message,
        timer: 1500,
      });
    }
  };

  return (
    <div className="container mx-auto">
      <div className="my-12">
        <h1 className="text-2 text-center">Add Restaurant</h1>
      </div>
      <div className="space-y-2">
        <label className="input input-bordered flex items-center gap-2">
          Title
          <input
            name="name"
            id="titleInput"
            type="text"
            placeholder="Input title here :"
            className="input input-bordered w-full max-w-lg my-3"
            onChange={handleChange}
            value={restaurant.name}
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Type
          <input
            name="type"
            id="descInput"
            type="text"
            placeholder="Input type here :"
            className="input input-bordered w-full max-w-lg my-3"
            onChange={handleChange}
            value={restaurant.type}
            required
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
        <button 
        className="btn btn-success" onClick={handSubmit}>
          Edit Restaurant
        </button>
      </div>
    </div>
  );
};

export default Edit;
