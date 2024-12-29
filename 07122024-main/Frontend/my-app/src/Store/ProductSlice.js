// import { createSlice } from "@reduxjs/toolkit";

// const productSlice = createSlice({
//   name: "products",
//   initialState: {
//     expandedProduct: null, // Stores the index of the expanded product
//   },
//   reducers: {
//     toggleExpand: (state, action) => {
//       state.expandedProduct =
//         state.expandedProduct === action.payload ? null : action.payload;
//     },
//   },
// });

// export const { toggleExpand } = productSlice.actions;
// export default productSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expandedProduct: null,
  popupVisible: false,
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleExpand: (state, action) => {
      state.expandedProduct =
        state.expandedProduct === action.payload ? null : action.payload;
    },
    showPopup: (state, action) => {
      state.popupVisible = true;
      state.selectedProduct = action.payload;
    },
    hidePopup: (state) => {
      state.popupVisible = false;
      state.selectedProduct = null;
    },
  },
});

export const { toggleExpand, showPopup, hidePopup } = productSlice.actions;
export default productSlice.reducer;
