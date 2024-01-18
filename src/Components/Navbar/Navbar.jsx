import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import arrow_down from "../Assets/arrowdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("electronics");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleSearch = () => {
    console.log("Search:", searchQuery, "Location:", selectedLocation);
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("electronics");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              Electronics
            </Link>
            {menu === "electronics" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("fashion");
            }}
          >
            Fashion{menu === "fashion" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("personal-care");
            }}
          >
            Personal Care{menu === "personal-care" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("all");
            }}
          >
            All Categories{menu === "all" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-sell">
          <button className="sell">Jual</button>
          <button className="login">Masuk/Daftar</button>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="" disabled>
            Select Location
          </option>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

    </div>
  );
};

export default Navbar;
