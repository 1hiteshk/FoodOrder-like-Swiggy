import { useContext, useState } from "react";
import Logo from "../assets/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

// SPA - Single Page Application???
// Client Side Routing

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const {user} = useContext(userContext);

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-green-50 lg:bg-pink-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
        
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
          <li className="px-2">Cart - {cartItems.length} items</li></Link>
        </ul>
      </div>
      {/* <h1 className="p-10 ml-">{isOnline ? "✅" : "🔴"}</h1>
      <h1 className="p-10 font-bold text-purple-900">{user.name}</h1> */}
      <ul className="flex space-x-6 p-10">
        <li>{isOnline ? "✅" : "🔴"}</li>
        <li className="font-bold text-purple-900">{user.name}</li>
      </ul>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
