import React from "react";
import imgg from "../assets/getout.gif";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotAllowed = () => {
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      navigate("/");
    }, 5000);

    const constDown = setInterval(() => {
      setCounster((prevCounter) => {
        if (prevCounter <= 1) {
          clearInterval(constDown);
          return 0;
        }
        return prevCounter - 1;
      });
    }, 5000);
    return () => {
      clearTimeout(timer);
      clearInterval;
      counter;
    };
  }, [navigate]);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={imgg} alt="Not allowed" className="w-56" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default NotAllowed;
