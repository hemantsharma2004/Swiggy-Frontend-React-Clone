import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
     name:'cart',
     initialState:{
         items:[],
     },
     reducers:{
         addCart:(state, action)=>{
             state.items.push(action.payload);
         },

         removeCart:(state)=>{
             state.items.pop();
         },

         clearCart:(state)=>{
             state.items.length=0;
         }
     }
})

export default cartSlice.reducer;
export const {addCart, removeCart , clearCart } = cartSlice.actions;