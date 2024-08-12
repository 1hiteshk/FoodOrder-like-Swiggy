import constants, { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import useGeoLocation from "./useGeoLocation";
import { current } from "@reduxjs/toolkit";

const Body = (
  {
    /*user*/
  }
) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(userContext);
  const [geolocation, setGeoLocation] = useState();

  const DATA_LINKS = constants();
  const FETCH_SWIGGY_DAPI = DATA_LINKS.SWIGGY_DAPI;
  const FETCH_SWIGGY_MAPI = DATA_LINKS.SWIGGY_MAPI;

  useEffect(() => {}, []);

  useEffect(() => {
    getRestaurants();
  }, [FETCH_SWIGGY_DAPI]);

  const getRestaurants = async () => {
    const REST_URL =
      (window.innerWidth >= 480
        ? ( FETCH_SWIGGY_DAPI )
        : ( FETCH_SWIGGY_MAPI)
      );
      console.log(REST_URL);
    const data = await fetch(REST_URL);
    console.log(data, "hehehe");
    // console.log("api call bani useEffect me", geolocation.latitude);
    const json = await data.json();
    console.log(json);
    const restList = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    const restList2 = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    const restData = restList?.length > 0 ? restList : restList2 ;
    console.log({restData})
    console.log({restList2})
    console.log({restList})
    setAllRestaurants(restData);
    setFilteredRestaurants(restData);
    console.log(allRestaurants);
  };

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 Offline, please check your internet connection!!</h1>;
  }

  // not render component (Early return)
  if (allRestaurants?.length === 0) return <Shimmer />;

  // return allRestaurants?.length === 0 ? (
  //   <Shimmer />
  // ) :
  return (
    <div className="mx-8 ">
      <div className="flex flex-col justify-between items-center md:flex md:flex-row">
        <div className="text-sm flex gap-2 my-4 items-center">
          <input
            type="text"
            className="w-64 text-xs border border-gray-300 focus:border-yellow-500 transition-all duration-300 px-2 py-2 ml-3 rounded"
            placeholder="Search for restaurants & food"
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
                  res?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  res?.info?.cuisines
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
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant.info} user={user} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
