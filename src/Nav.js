import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
// const logo = "blank";
const handleClick = () =>{
    alert("Please login through the linked page");
}

const Navbar = () => {
  return (



<div>
<nav className="navbar">
  {
    <><div className="navbar-left">
        <i class="material-icons">computer</i>
      </div>
      <div className = "navbar-center">
        <ul className="nav-links">
            <li>
                <Link to="/queue"> Queue </Link>
            </li>
            <li>
                <Link to="/quiz"> Quiz </Link>
            </li>
            <li>
            <Link to="/stylechecker"> Style Checker</Link>

            </li>
        </ul>  
      </div>
      <div className = "navbar-right">
        <button onClick={handleClick}> Login Button</button>
      </div>
    </>

  }
</nav>
</div>

);
};

export default Navbar;