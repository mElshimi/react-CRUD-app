import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../utils/utils";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    try {
      const { data } = await axios.get(`${baseUrl}/posts`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = { records: [], loading: false, error: null };
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get books
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.records = action.payload;
        console.log(action);
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const { } = postSlice.actions;
export default postSlice.reducer;
