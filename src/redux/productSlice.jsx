import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    searchTerm: '',
    filteredData: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) => { // ✅ Renamed for consistency
            state.products = action.payload;
            state.filteredData = action.payload; // ✅ Initialize filteredData when products are set
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload.trim(); // ✅ Trim spaces for better UX

            if (state.searchTerm === "") {
                state.filteredData = state.products; // ✅ Show all products if search is empty
            } else {
                state.filteredData = state.products.filter(product =>
                    product?.name?.toLowerCase().includes(state.searchTerm.toLowerCase()) // ✅ Added optional chaining to prevent errors
                );
            }
        },
    }
})

export const { setProduct, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
