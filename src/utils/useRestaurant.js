import { useState, useEffect } from "react";
// import { FETCH_MENU_URL } from "../constants";
import useGeoLocation from "../components/useGeoLocation";

const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);
  const location = useGeoLocation();
  const lat = location.coordinates.lat;
  const lng = location.coordinates.lng;

  const FETCH_MENU_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat="+lat+"&lng="+lng+"&restaurantId="
console.log(FETCH_MENU_URL);

  useEffect(() => {
    getRestaurantInfo();
  }, [FETCH_MENU_URL]);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestauraunt(json.data);
    
  }

  return restaurant;
};

export default useRestaurant;
