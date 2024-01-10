import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btn, setBtn] = useState("Login");
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
          alt="Restaurants Logo"
        />
      </div>
      <div className="nav-items">
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          <Link to="/about">About</Link>{" "}
        </li>
        <li>Conatct</li>
        <li>Orders</li>
        <button
          className="login-btn"
          onClick={() => {
            btn === "Login" ? setBtn("Logout") : setBtn("Login");
          }}
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default Header;
