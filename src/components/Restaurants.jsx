import React from 'react'
import Card from './Card'
import { useEffect, useState } from 'react'

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5173/restaurants")
    .then((res) => {
      return res.json();
    });
  },[])

   
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
}

export default Restaurants