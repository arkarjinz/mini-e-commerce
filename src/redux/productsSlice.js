import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category) => {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    return res.json();
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    selectedCategory: null,
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setCategory: (state, action) => {
        state.selectedCategory = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchProductsByCategory.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
            (state.status = "succeeded"), (state.items = action.payload)
        })
        .addCase(fetchProductsByCategory.rejected, (state, action) => {
            (state.status = "failed"), (state.error = action.error.message)
        })
  }
});

export const {setCategory} = productsSlice.actions;
export default productsSlice.reducer;
