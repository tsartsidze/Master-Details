import { createSlice } from "@reduxjs/toolkit";

const data = {
  dataProduct: [],
  productCategoryList: [],
};

const productDataSlice = createSlice({
  name: "data",
  initialState: data,
  reducers: {
    pushDataProduct(state, action) {
      state.dataProduct = action.payload;
    },
    pushProductCategory(state, action) {
      state.productCategoryList = action.payload;
    },
    deleteProduct(state, action) {
      const deletedProduct = state.dataProduct.filter(
        (product) => product.id !== action.payload
      );
      state.dataProduct = deletedProduct;
    },
    addProduct(state, action) {
      state.dataProduct.unshift(action.payload);
    },
    editProduct(state, action) {
      const editProduct = state.dataProduct.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      state.dataProduct = editProduct;
    },
    addCategory(state, action) {
      state.productCategoryList.push(action.payload);
    },
  },
});

export const dataSliceActions = productDataSlice.actions;
export default productDataSlice.reducer;
