import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    products: [],
    productsNumber: 0 
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state,action) =>{
            const addProductExists = state.products.find((product) => 
                product.id === action.payload.id
            )
            if(addProductExists){
                addProductExists.quantity += parseInt(action.payload.quantity)
            }
            else{
                state.products.push({...action.payload, quantity: parseInt(action.payload.quantity)})
            }
            state.productsNumber += parseInt(action.payload.quantity)
        },
        removeFromCart: (state,action) =>{
            const productToRemove = state.products.find((product) => 
            product.id === action.payload)

            state.productsNumber -= productToRemove.quantity

            const index = state.products.findIndex((product) => 
            product.id === action.payload)

            state.products.splice(index,1)
        },
        incrementProduct: (state, action) => {
            const addProductExists = state.products.find((product) => product.id === action.payload.id);
          
            if (addProductExists) {
              addProductExists.quantity += parseInt(action.payload.quantity);
            } else {
              // If the product doesn't exist, you can add it to the cart here.
              state.products.push({ ...action.payload, quantity: parseInt(action.payload.quantity) });
            }
            state.productsNumber += parseInt(action.payload.quantity);
          },
          decrementProduct: (state, action) => {
            const productToUpdate = state.products.find((product) => product.id === action.payload.id);
          
            if (productToUpdate) {
              if (productToUpdate.quantity > 0) {
                productToUpdate.quantity -= parseInt(action.payload.quantity);
                state.productsNumber -= parseInt(action.payload.quantity);
              } else {
                state.productsNumber -= productToUpdate.quantity;
                const index = state.products.findIndex((product) => product.id === action.payload.id);
                state.products.splice(index, 1);
              }
            }
          }
           
          
    }
})

export const {addToCart, removeFromCart, incrementProduct, decrementProduct} = cartSlice.actions
export default cartSlice.reducer  