import React from "react";
import Box from "./Box";
import { useState, useEffect } from "react";

const Restaurants = ({ restaurants }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {restaurants &&
        restaurants.map((restaurant) => {
          return (
            <Box
              key={restaurant.id}
              id={restaurant.id}
              imageUrl={restaurant.img}
              name={restaurant.name}
              type={restaurant.type}
            />
          );
        })}
    </div>
  );
};

export default Restaurants;
