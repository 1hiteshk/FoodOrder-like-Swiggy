import { useEffect, useState } from "react";

const useGeoLocation = () => {
   const [location, setLocation] = useState({
     loaded : false,
     coordinates : { lat :"" , lng : ""},
   });

   const success = (location) => {
     setLocation({
          loaded: true,
          coordinates : {
               lat : location.coords.latitude,
               lng : location.coords.longitude,
          },
     });
   };

   const error = (err) => {
     setLocation({
          loaded: true,
          errorMessage: err.message || 'Unknown Error',
     });
   };

   useEffect(() => {
     if (!navigator?.geolocation){
          error({
               code: 0,
               message: "geolocation not supported in browser turn on"
          })
     }
     navigator.geolocation.getCurrentPosition(success,error);
   },[]);

   return location;
  };

  export default useGeoLocation;