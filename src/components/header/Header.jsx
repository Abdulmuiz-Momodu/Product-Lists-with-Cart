import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1>Desserts</h1>
      <a href="#cart">
        <img className="dropdown" src="./images/down-arrow.png" alt="dropdown-arrow" />
      </a>
    </div>
  );
}
