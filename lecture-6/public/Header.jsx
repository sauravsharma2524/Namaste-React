import { useState } from "react";

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
        <li>Home</li>
        <li>About</li>
        <li>Conatct</li>
        <li>Order</li>
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
