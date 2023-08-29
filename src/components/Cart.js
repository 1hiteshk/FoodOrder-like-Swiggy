import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../utils/cartSlice";
import FoodItemCart from "./FoodItemCart";
import { useRef } from "react";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    // console.log(cartItems)
    let totalAmount =  useRef(0);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    totalAmount.current=0;
    const totalHandler = (price,quantity) => {
      totalAmount.current = Number(totalAmount.current) + (price * quantity);
    }
    
    return(
        <div className="md:w-3/5 w-[80%]  m-auto py-4 min-h-screen ">
             <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Cart Items - {cartItems.length}</h1>
            <button className="text-xs font-medium bg-red-300 py-1 px-2 hover:bg-red-400 transition-all duration-300 ease-in-out rounded" onClick={()=> handleClearCart()}>clearCart</button>
            </div>
            {cartItems.length === 0 && <h1>Cart is empty Add items to the cart</h1>}
        {/* <ItemList items={cartItems} /> */}
        {cartItems.map( (item) => {
          totalHandler(item?.price, item?.quantity)
          
          return (<FoodItemCart key={item.id} item={item} />)
        } 
          )} 
            {/* <FoodItem {...cartItems[0]} /> */} {/* make it work for one then map */}

            <div className='m- p-4 font-bold text-2xl border-b w-full'>
            <span className="m-6">Total : &#8377; {(totalAmount.current / 100).toFixed(2)} </span>
        </div>
        
        </div>
    );
};

export default Cart;