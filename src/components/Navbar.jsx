import React from "react";
import Title from "./Title";
import Search from "./Search";
import UserProfile from "./UserProfile";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useAuthContext();
  const menus = {
    ROLES_ADMIN: [
      { name: "Add restaurant", link: "/add" },
      { name: "Search", link: "/" },
      { name: "Dashboard", link: "/dashboard" },
    ],
    ROLES_USER: [{ name: "Search", Link: "/add" }],
    ROLES_MODERATOR: [
      { name: "Add restaurant", link: "/add" },
      { name: "Search", link: "/" },
    ],
  };
  //console.log("user", user);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {user &&
          menus[user.roles[0]].map((menuItem) => (
            <li key={menuItem.name}>
              <a href={menuItem.link}>{menuItem.name}</a>
            </li>
          ))}


        {/* <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">
            Grab Restaurant
          </a>          <a className="btn btn-ghost text-xl" href="/Add">
            Add Restaurant
          </a>
        </div> */}
        <div className="navbar-end">
          {user ? (
            <UserProfile logout={logout} />
          ) : (
            <div className="space-x-2 flex">
              <RegisterButton />
              <LoginButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
