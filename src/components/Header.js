import { useContext, useEffect, useState } from "react";
import chef from "../assets/chef.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";


const Title = () => (
  <a href="/">
    <img
      className="h-14 w-14  md:w-14 md:h-14  lg:h-20 lg:w-20"
      alt="logo"
      src={chef}
    />
  </a>
);

const Header = () => {
  const token = localStorage.getItem("token");
   // use useState for user logged in or logged out
   const [isLoggedin, setIsLoggedin] = useState(
    token?.length === 100 ? true : false
  );
  const navigate = useNavigate();

  const [city, setCity] = useState("");

  const isOnline = useOnline();

  const { user } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const [ctime,setCtime] = useState(new Date().toLocaleTimeString());
  setInterval(()=>{
    setCtime(new Date().toLocaleTimeString());
  },1000)

 

  const path = useLocation();
  // console.log(path.state?.data)
  const isLogin = path.state?.data;

  useEffect(() => {
    
  },[isLogin]);

  return (
    <div className="sticky z-50 top-0 w-full flex justify-between items-center px-2 lg:px-6 md:px-8 py-1 shadow bg-[#fd9133] text-white">
     <div className="flex items-center text-sm font-normal whitespace-nowrap gap-3 md:gap-6 md:font-semibold md:text-lg"> <Title />
     {ctime}</div>
     {/* <Timer /> */}
      <ul className="flex items-center gap-3 lg:gap-6 md:gap-12 text-sm font-medium">
        {/* <li> <input  type="text"
          className="lg:w-64 md:w-50  h-6 text-md text-black border-b-2  border-gray-900 bg-white focus:bg-[#fd9133]  transition-all duration-300 px-2 rounded"
          placeholder="your location"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
       />
       </li>
    
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg> */}

      <Link to="/" className=" hover:text-orange-900 hover:bg-gray-200 hover:rounded px-1  transition-all duration-300 ease-in-out">
            <li>Home</li>
          </Link>
        

      <Link
          to="/about"
          className=" hover:text-orange-900 hover:bg-gray-200 hover:rounded px-1  transition-all duration-300 ease-in-out"
        >
          <li>About</li>
        </Link>

      <Link
          to="/instamart"
          className=" hover:text-orange-900 hover:bg-gray-200 hover:rounded px-1  transition-all duration-300 ease-in-out"
        >
          <li>Instamart</li>
      </Link>
      <li>
        <Link to="/cart" className="relative ">
            <i className="fa-solid fa-cart-shopping">
              <span
                className="absolute top-[-8px] right-[-12px] bg-white text-yellow-400 w-4 p-1  h-4 rounded-full text-[10px] flex justify-center items-center"
                data-testid="cart"
              >
                {cartItems.length}
              </span>
            </i>
          </Link>
        </li>

        <li>
          {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.removeItem('token');
                  setIsLoggedin(!isLoggedin);
                }}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => {navigate("/login", {state: {data: isLoggedin}})
              setIsLoggedin(!isLoggedin);
              }}>
                login
              </button>
            )}
        </li>
      </ul>
      {/* <ul>
        <li>{isOnline ? "✅" : "🔴"}</li>
        {/* <li className="font-bold text-purple-900">{user.name}</li> *
      </ul> */}
    </div>
  );
};

export default Header;
