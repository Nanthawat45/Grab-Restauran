import { useEffect, useState } from "react";
import Search from "../components/Search";
import Restaurants from "../components/Restaurants";
import RestaurantService from "../services/restaurant.service"
import Swal from "sweetalert2";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); 
  useEffect(() => {
    const getRestaurants = async ()=>{
      try {
      const response = await RestaurantService.addRestaurant();
      if(response.status === 200) {
        setRestaurants(response.data);
        setFilteredRestaurants(response.data);
      }
    } catch (error){
      Swal.fire({
        titie: "Get All Restaurant",
        text: error?.response?.data?.message || 
        error.message,icon:"error",
      });
    }
    };
    getRestaurants();
  }, []);

  return (
      <div className="container mx-auto">
        <Search 
        restaurants={restaurants} 
        setFilteredRestaurants={setFilteredRestaurants} />
        <Restaurants restaurants={filteredRestaurants} />
      </div>
  );
}


