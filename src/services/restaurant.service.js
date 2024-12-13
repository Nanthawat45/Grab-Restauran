import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;

//get all restaurants
const getAllRestaurant = async () => {
  return await api.get(RESTO_API);
};

//get restarant by Id
const getRestarantById = async (id) => {
  return await api.get(RESTO_API + `/${id}`);
};

//update a restaurant data
const editRestaurant = async (id, restaurant)=>{
  return await api.put(RESTO_API + `/${id}`, restaurant);
}

//Delete a restaurant
const deleteRestaurant = async (id) => {
  return await api.delete(RESTO_API + `/${id}`);
};

const addRestaurant = async (restaurant) => {
  return await api.post(RESTO_API, restaurant);
};

const RestaurantService = {
  getAllRestaurant,
  getRestarantById,
  editRestaurant,
  deleteRestaurant,
  addRestaurant,
};

export default RestaurantService;