import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import useGeoLocation from "./useGeoLocation";

// export const location = useGeoLocation();
// export const lat = location.coordinates.lat;
// export const lng = location.coordinates.lng;



  const Body = ({/*user*/}) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {user,setUser} = useContext(userContext);
  const location = useGeoLocation();
  const lat = location.coordinates.lat;
  const lng = location.coordinates.lng;
  console.log("hitu" , lng);
  const REST_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat="+lat+"&lng="+lng+"&page_type=DESKTOP_WEB_LISTING"

console.log(REST_URL);
  

  
  useEffect(() => {
    getRestaurants();
  }, [REST_URL]);

  async function getRestaurants() {
    // console.log("https://www.swiggy.com/dapi/restaurants/list/v5?lat="+lat+"&lng="+lng+"&page_type=DESKTOP_WEB_LISTING");
    const data = await fetch(
      REST_URL
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  // const isOnline = useOnline();

  // if (!isOnline) {
  //   return <h1>🔴 Offline, please check your internet connection!!</h1>;
  // }


  // not render component (Early return)
  if (!allRestaurants) return <Shimmer />;

  // return allRestaurants?.length === 0 ? (
  //   <Shimmer />
  // ) : 
  return (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-100 p-2 rounded-lg"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn p-2 m-2 bg-purple-800 text-white rounded-lg hover:bg-green-800 w-18"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input value={user.name} onChange={
          e => setUser({
            ...user,
            name: e.target.value,
          })
        }></input>
         <input value={user.email} onChange={
          e => setUser({
            ...user,
            email: e.target.value,
          })
        }></input>
      </div>
      <div>
        {/* hi {location.loaded ? JSON.stringify(location) : "location not available"}
        hii {location.coordinates.lat} */}
      </div>
      <div className="flex flex-wrap ">
        {/* You have to write logic for NO restraunt fount here */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data}  user={user}/>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
