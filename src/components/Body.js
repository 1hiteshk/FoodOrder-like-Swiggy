import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import useGeoLocation from "./useGeoLocation";

const getDataFromLS = () => {
    const data = localStorage.getItem('coords');
    if(data){
        return JSON.parse(data);
    }
    else{
        return (
            {
                latitude: 12.971599,
                longitude: 77.594566,
              }
        )
    }
}

const Body = (
  {
    /*user*/
  }
) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(userContext);
  const [geolocation, setGeoLocation] = useState(getDataFromLS());
  // const [latitude, setLatitude] = useState(12.971599);
  // const [longitude, setLongitude] = useState(77.594566);

  useEffect(() => {
    getGeoLocationData();
  }, []);

  useEffect(() => {
    localStorage.setItem('coords' ,JSON.stringify(geolocation))
    getRestaurants();
  }, [geolocation]);

  const getGeoLocationData = () => {
    const position = navigator.geolocation.getCurrentPosition((pos) => {
      setLocation(pos);
      // localStorage.setItem("coordinates data : ",pos.coords);
      console.log(pos);
    });
  };

  const setLocation = (position) => {
    setGeoLocation({
      latitude: position.coords.latitude,
      longitude: `${position.coords.longitude}`,
    });
  };

  const getRestaurants = async () => {
    const REST_URL = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${geolocation.latitude}&lng=${geolocation.longitude}&page_type=DESKTOP_WEB_LISTING`;
    const data = await fetch(REST_URL);
    // console.log("api call bani useEffect me", geolocation.latitude);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 Offline, please check your internet connection!!</h1>;
  }

  // not render component (Early return)
  if (!allRestaurants) return <Shimmer />;

  // return allRestaurants?.length === 0 ? (
  //   <Shimmer />
  // ) :
  return (
    <div className="mx-8">
      <div className="flex flex-col justify-between items-center md:flex md:flex-row">
        <div className="text-sm flex gap-2 my-4 items-center">
          <input
            type="text"
            className="w-64 text-xs border border-gray-300 focus:border-yellow-500 transition-all duration-300 px-2 py-2 ml-3 rounded"
            placeholder="Search for a restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="text-xs font-medium shadow-md px-2 py-2 outline-none  rounded bg-yellow-400 hover:bg-yellow-500 transition-all duration-200 ease-in-out text-white"
            onClick={() => {
              //need to filter the data
              const filteredRestaurant = allRestaurants.filter(
                (res) =>
                  res?.data?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  res?.data?.cuisines
                    .join(", ")
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              // update the state - restaurants
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        {/* <input value={user.name} onChange={
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
        }></input> */}
      </div>
      <div>
        {/* hi {location.loaded ? JSON.stringify(location) : "location not available"}
        hii {location.coordinates.lat} */}
      </div>
      <div className="flex flex-col md:flex-row items-center md:flex-wrap gap-2 my-2 md:my-0 justify-center">
        {/* You have to write logic for NO restraunt fount here */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} user={user} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
