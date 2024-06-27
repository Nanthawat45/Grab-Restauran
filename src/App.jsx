// import { useState } from "react";
import "./App.css";
import Restaurant from "./components/Restaurant";
import Search from "./components/Search";
import Header from "./components/Header";
import { useEffect, useState } from "react";
// import Card from "./components/Card";
// import Card2 from "./components/Card2";

function App() {
  
useEffect(() => {
  fetch("http://localhost:5000/restaurants")
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      setRestaurants(response);
      setFilteredReastaurants(response);
    })
    .catch((err) => {
      console.log(err.message);
    });
}, []);

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Search />
        {/* <Card2/> */}
        <Restaurant restaurant={Restaurant}/>
        setFilteredReastaurants={setFilteredReastaurants}
      </div>
    </>
  );
}

export default App;
