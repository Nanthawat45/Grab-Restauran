import React from "react";
import Box from "./Box";

const Restaurants = ({ restaurants }) => {
  return (
    <div className="flex">
      <div className="flex flex-warp justify-center gap-4">
        {restaurants &&
          restaurants.map((restaurant) => {
            return (
              <Box
                key={restaurant.id}
                title={restaurant.title}
                img={restaurant.img}
                type={restaurant.type}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Restaurants;
