import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import userContext from "../utils/userContext";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  // user,  // ye state vala h props drilling
}) => {
  const {user} = useContext(userContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      {/* <h4>{user.name}</h4>     ye state vala h props drilling */}
      <h5 className="font-bold">
        {user.name} - {user.email}   {/* ye useContexxt vala h */}
      </h5>
    </div>
  );
};

export default RestrauntCard;
