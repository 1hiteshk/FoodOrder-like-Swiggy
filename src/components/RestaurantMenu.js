import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  // const {itemCards} = restaurant.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  if (!restaurant) return <Shimmer />

  return (
    <div className="flex">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2 className="font-bold text-3xl text-center py-2">Name : {restaurant?.cards[0]?.card?.card?.info?.name}</h2>
        <img className="px-2 pb-2" src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
        <h3 className="font-bold text-3xl text-center pb-2">Area : {restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3 className="font-bold text-3xl text-center pb-2">City : { restaurant?.cards[0]?.card?.card?.info?.city}</h3>
        <h3 className="font-bold text-3xl text-center pb-2">Ratings : ⭐ { restaurant?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
        <h3 className="font-bold text-3xl text-center pb-2">{ restaurant?.cards[0]?.card?.card?.info?.costForTwoMsg}</h3>
        
        
      </div>
      <div className="p-5">
        <h1 className="font-bold text-3xl pl-6">Menu</h1>
        <ul data-testid="menu">
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item) => (
            <div className="flex py-2" key={item.id}>** 
              <li key={item.card.info.name} className="mt-[80px] font-semibold">{item?.card?.info?.name} - {} </li>
              <img key={item.card.info.imageId} className="h-40 w-50" src={IMG_CDN_URL + item.card.info.imageId} />
               <li className="mt-[80px]">{" Rs."} {item.card.info.price /100 || item.card.info.defaultPrice /100} </li>
              <button
                data-testid="addBtn"
                className="mt-[75px] h-8 px-4 mx-4 w-24 font-medium bg-green-200"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

