import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const itemIndex = state.products.find((item) => item.id === newItem.id);
            if (itemIndex) {
                itemIndex.quantity++;
                itemIndex.totalPrice += newItem.price;
            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image
                })
            }
            state.totalPrice += newItem.price;
            state.totalQuantity++;
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const item = state.products.find((item) => item.id === id);

            if (!item) return; // Exit if item is not found

            // Deduct the item's total price and quantity from the cart's total
            state.totalPrice -= item.totalPrice;
            state.totalQuantity -= item.quantity;

            // Remove the item from the cart
            state.products = state.products.filter((item) => item.id !== id);
        },

        increaseQuantity(state, action) {
            const id = action.payload;
            const itemIndex = state.products.find((item) => item.id === id);
            itemIndex.quantity++;
            itemIndex.totalPrice += itemIndex.price;
            state.totalPrice += itemIndex.price;
            state.totalQuantity++;
        },
        decreaseQuantity(state, action) {
            const id = action.payload;
            const itemIndex = state.products.find((item) => item.id === id);
            if (itemIndex.quantity === 1) {
                state.products = state.products.filter((item) => item.id !== id);
            } else {
                itemIndex.quantity--;
                itemIndex.totalPrice -= itemIndex.price;
            }
            state.totalPrice -= itemIndex.price;
            state.totalQuantity--;
        }
    },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;