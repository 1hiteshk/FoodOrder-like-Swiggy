import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    // console.log(cartItems)
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };
    
    return(
        <div className="md:w-3/5 w-[80%]  m-auto py-4 min-h-screen ">
             <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Cart Items - {cartItems.length}</h1>
            <button className="text-xs font-medium bg-red-300 py-1 px-2 hover:bg-red-400 transition-all duration-300 ease-in-out rounded" onClick={()=> handleClearCart()}>clearCart</button>
            </div>
          <div className="flex flex-col"> {cartItems.map(item => <FoodItem key={item.id} {...item} />)}
            </div> 
            {/* <FoodItem {...cartItems[0]} /> */} {/* make it work for one then map */}
        
        </div>
    );
};

export default Cart;