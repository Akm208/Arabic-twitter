import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api/index";



export const postSlice = createSlice({
    name: "arabic twitter",
    initialState: {
        // post: api.getPost().then(res =>  res.data )
        post:  api.getPost()
    },

    reducers: {
        fetchPosts: async (state) => {
            const data = await api.getPost().then(res => res.data)
            // state.post = [{ name: "nasir", roll: "3" }]
            state.post = data;
            console.log("reducerData", state.post)

        }
    }
})
export const { fetchPosts } = postSlice.actions;
export const posts = (state) => state.post.post;
export default postSlice.reducer;