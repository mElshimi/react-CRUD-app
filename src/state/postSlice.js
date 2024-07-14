import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../utils/utils";
import { toast } from "react-toastify";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    try {
      const res = await axios.get(`${baseUrl}/posts`);
      return res.data;
    } catch (error) {
      return rejectWithValue(toast.error(error.message));
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    try {
      const res = await axios.delete(`${baseUrl}/posts/${id}`);
      toast.success("Delete Post Successfully");
      // dispatch(getPosts());
      return res.data;
    } catch (error) {
      return rejectWithValue(toast.error(error.message));
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
      // get posts
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.records = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // delete posts
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.records = state.records.filter(
          (post) => post.id !== action.payload.id
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const { } = postSlice.actions;
export default postSlice.reducer;
