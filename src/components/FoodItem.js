import { IMG_CDN_URL } from "../constants";

const FoodItem = ({
  name,
  description,
  imageId,
  price,
  defaultPrice,
}) => {
  return (
    <div className="my-2 border-b py-2 md:flex-row flex flex-col text-sm  gap-8">
      <img className="w-32 h-20 rounded object-cover" src={IMG_CDN_URL + imageId} />
      <div className="flex flex-col">
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="text-gray-500">{description}</h3>
      <h4 className="font-bold">Rupees : ₹{price / 100 || defaultPrice/100 } </h4>
      </div>
     
    </div>
  );
};

export default FoodItem;
