import { useState, useEffect } from "react";
// import { FETCH_MENU_URL } from "../constants";
import useGeoLocation from "../components/useGeoLocation";
import constants from "../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);
  // const location = useGeoLocation();
  // let lat = 12.971599;
  // let lng= 77.594566;
  //  lat = location?.coordinates?.lat;
  //  lng = location?.coordinates?.lng;
  //  if(!location?.coordinates?.lat){ lat =12.971599 }
  //  if(!location?.coordinates?.lng){ lng =77.594566}

  // const FETCH_MENU_URL = "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat="+lat+"&lng="+lng+"&restaurantId="

  const DATA_LINKS = constants();
  const FETCH_SWIGGY_MENU_API = DATA_LINKS.SWIGGY_MENU_API;
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    // const FETCH_MENU_URL = `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=`;
    const FETCH_MENU_URL = FETCH_SWIGGY_MENU_API;

    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestauraunt(json.data);
  }

  return restaurant;
};

export default useRestaurant;
