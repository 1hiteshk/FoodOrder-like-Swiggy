import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { removeItem, decrQuantity, incrQuantity } from "../utils/cartSlice";

const FoodItemCart = ({ item }) => {
  const { name, description, category, imageId, price, defaultPrice } = item;

  const dispatch = useDispatch();
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="my-2 border-b py-2 md:flex-row lg:flex-row flex flex-col text-sm  gap-8 ">

      <img
        className="w-32 h-20 rounded object-cover"
        src={IMG_CDN_URL + imageId}
      />

      <div className="absolute">
        <button
          className="bg-white rounded w-28 h-8 mx-2 my-16 border font-semibold text-green-500"
          onClick={() => handleRemoveItem(item)}
        >
          Remove
        </button>
      </div>

      <div className="flex flex-col">
        <h2 className="font-bold text-xl">{name}</h2>
        <h3 className="text-gray-500">
          {/*category*/} {description || category}
        </h3>
        <h4 className="font-bold">
          Rupees : ₹{price / 100 || defaultPrice / 100}{" "}
        </h4>
      </div>

      <div className="border flex flex-col justify-between ">
        <button
          className=" text-red-500 text-2xl bg-slate-100"
          onClick={() =>
            item?.quantity >= 2
              ? dispatch(decrQuantity(item))
              : handleRemoveItem(item)
          }
        >
          -
        </button>
        <button className="font-bold text-lg" onClick={console.log(item, "foodq")}>{item.quantity}</button>
        <button
          className="text-green-500 text-2xl bg-slate-100"
          onClick={() => dispatch(incrQuantity(item))}
        >
          +
        </button>
      </div>

    </div>
  );
};

export default FoodItemCart;
