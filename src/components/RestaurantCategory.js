import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // console.log(data)
    // const [showItems, setShowItems] = useState(false);  controlled component , simple accordian

    const handleClick=()=>{
      // setShowItems(!showItems);
      setShowIndex();
    }
  return(
    <div>
        {/* Header */}
        <div className=" mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between  pb-2 cursor-pointer border-b-2 border-spacing-1 mb-1" onClick={handleClick}>
            <span className="font-bold text-lg ">{data.title} ({data.itemCards.length})</span>
            <span className="font-bold text-lg">&#8650;</span>
            </div>
        
           {showItems && <ItemList items={data.itemCards} /> }
        </div>
    </div>
  )
};

export default RestaurantCategory;