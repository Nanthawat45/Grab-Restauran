import React from 'react'
import { useEffect, useState } from "react";

const Search = ({restaurants, setRestaurants}) => {
  const [keyword, setKeyboard] = useState("");

  const handleChange = async (e) =>{
    setKeyboard(e.target.vale);
    // const result = await filtered(restaurants, keyword);
    if (e.target.vale ===""){
      setFilteredRestaurants(restaurants);
      return;
    }
    const result = restaurants.fillter((restaurant) => {
      return (
        restaurant.title.toLowerCase().includes(keyword.toLocaleLowerCase()) ||
        restaurant.type.toLowerCase().includes(keyword.toLocaleLowerCase())
      );
    });
    console.log(result);
    setFilteredRestaurants(result);
  };
  //  const [restaurants, setRestaurants] = useStare([]);
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

  // const filtet = (restaurants, keyword) =>{
  //   // console.log(restaurants);
  //   // console.log(keyword);
  //   const result =[];
  //   //TODO
  //   for (let i = 0; i <= restaurants.lenght; i++) {
  //     // console.log(restaurants[i].title);
  //     // console.log(restaurants[i].type);
  //     // console.log(keyword);
  //     if(
  //       restaurants[i]?.type.toLowerCase().includes(keyword.toLowerCase()) ||
  //       restaurants[i]?.type.keyword === restaurants.type[i]?.type);
  //     }{
  //       result.push(restaurants[i]);
  //     }
      
  //   }
  filtet(restaurants,keyword);
    return result;
  };
  filtet();

  return (
    <div className="mb-5">
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" noChange={handleChange}/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};

export default Search