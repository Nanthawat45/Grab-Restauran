import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";

// const Restaurants = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/restaurants").then((res) => {
//       return res.json();
//     });
//   }, []);
useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestos(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-warp justify-ceter gap-4">
        {restaurants &&
          restaurants.map((restaurant) => {
            return (
              <Card
                key={restaurant.id}
                img={restaurant.img}
                title={restaurant.title}
                type={restaurant.type}
              />
            );
          })}
      </div>
    </div>
  );
//};

export default Restaurants;
