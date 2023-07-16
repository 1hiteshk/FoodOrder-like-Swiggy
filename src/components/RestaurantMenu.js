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
    <div className="flex flex-col w-[80%] md:w-2/3 p-4 border m-auto">
      <div className="flex flex-col justify-between pb-4 border-b md:flex-row gap-3">
        <div  className="flex flex-col text-xs text-[#535665] font-medium gap-1">
        {/* <h1>Restraunt id: {resId}</h1> */}
        <span className="text-xl font-bold text-black">{restaurant?.cards[0]?.card?.card?.info?.name}</span>
        <span className="">
            {restaurant?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
          </span>
          <span className="">
            {restaurant?.cards[0]?.card?.card?.info?.areaName},{" "}
            {restaurant?.cards[0]?.card?.card?.info?.city}{" "}
            <span className="text-orange-600 font-bold">𖡡</span>
          </span>
          <span className="flex">
          <span className="flex items-center gap-1 px-1 mr-2 rounded-sm text-white bg-green-600  font-semibold">
          <span className="text-[0.7rem]">{restaurant?.cards[0]?.card?.card?.info?.avgRating} </span>
            <span className="text-white text-[0.8rem]">★ </span>
            </span>
             |{" "}
            {restaurant?.cards[0]?.card?.card?.info?.totalRatingsString}
          </span>
          </div>
        <img className="w-56 h-36 rounded" src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
        </div>
        
        <div className="flex gap-8 items-center border-b py-3 text-sm md:text-base">
          <div className="flex items-center gap-2 font-semibold">
          <svg
            className="RestaurantTimeCost_icon__8UdT4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              r="8.35"
              transform="matrix(-1 0 0 1 9 9)"
              stroke="#3E4152"
              strokeWidth="1.3"
            ></circle>
            <path
              d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
              fill="#3E4152"
            ></path>
          </svg>
          <span className="">
            {restaurant?.cards[0]?.card?.card?.info?.sla?.slaString}
          </span>
          </div>
          <div className="flex items-center gap-2 font-semibold">
          <svg
            className="RestaurantTimeCost_icon__8UdT4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              cx="9"
              cy="9"
              r="8.25"
              stroke="#3E4152"
              strokeWidth="1.5"
            ></circle>
            <path
              d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
              fill="#3E4152"
            ></path>
          </svg>
          <span className="">
            {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}
          </span>
        </div>
        </div>

        <h1 className="font-bold mt-4 mb-10">
        Recommended for you (
        {
          restaurant?.cards[restaurant?.cards.length -1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card?.itemCards?.length
        }
        )
      </h1>
        
       
      
      
        <div className="">
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item) => {
            return (
              <div  className="flex flex-col justify-between border-b pb-6 mb-4 gap-6 md:flex-row"
              key={item?.card?.info?.id}>
                <div className="flex flex-col gap-2 w-full md:w-3/4"> 
                <span className="font-semibold">
                    {item?.card?.info?.name}
                  </span>
                  <div className="flex items-center gap-2">
                   <span className="font-semibold">
                   &#8377;
                   {item.card.info.price /100 || item.card.info.defaultPrice /100}
                   </span>
                  </div>
                  <p className="text-xs text-[#535665] ">
                    {item?.card?.info?.description}
                  </p>
                </div>

                <div className=" flex flex-col gap-1 relative md:w-1/4 w-auto">
                <img className="w-32 h-24 rounded self-center object-cover"
                 src={IMG_CDN_URL + item.card.info.imageId} alt="foodImage" />
                 <button
                className=" h-9 absolute bottom-[-8px] bg-white shadow-md border self-center text-[0.9rem] py-1 px-2 font-medium rounded  active:scale-90 hover:bg-orange-600 transition-all duration-300 ease-in-out text-green-500"
                onClick={() => addFoodItem(item?.card?.info)}
              >
                ADD TO CART
              </button>
                </div>
              </div>
            );
          
})}
        </div>
      
    </div>
  );
};

export default RestaurantMenu;

