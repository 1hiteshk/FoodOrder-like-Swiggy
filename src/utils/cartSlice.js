import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            if(state.items.find((item) => item.id === action.payload.id)){
                state.items = state.items.map((item) => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item ) 
            }
            else{
            //  state.items.push(action.payload);
            state.items = [...state.items, action.payload];
            }
        },
        incrQuantity: (state, action) => {
            state.items = state.items.map((item) => (item.id === action.payload.id) ? { ...item, quantity: item.quantity + 1 } : item)
        },
        decrQuantity: (state, action) => {
            state.items = state.items.map((item) => (item.id === action.payload.id) ? { ...item, quantity: item.quantity - 1 } : item)
        }
        ,
        removeItem: (state,action) => {
            state.items.map((item) => {
                if(item.id === action.payload.id){
                    const updatedItems = state.items.filter(
                        (itm) => itm.id !== item.id
                    );

                    state.items = updatedItems;
                    
                }
            })
        },
        clearCart: (state) => {
            //  state.items = []  // this meana w'r just changing the state, not mutating the state, adding another ref. to it
            state.items.length = 0; // state = [] mutating the state
        },

    },
})

export const {addItem, removeItem, clearCart,incrQuantity, decrQuantity} = cartSlice.actions;

export default cartSlice.reducer;