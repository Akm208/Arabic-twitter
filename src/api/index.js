// import dotenv from 'dotenv';
// const config = dotenv.config();
import axios from "axios"
const API = axios.create({ baseURL: "https://serene-reaches-44976.herokuapp.com" })
export const getPost = () => API.get("/posts")
export const getUsers = () => API.get("/users")
export const createUsers = (newUser) => API.post("/users", newUser)
export const writePost = (newpost) => API.post("/post", newpost)
export const deletePost = (id) => API.delete(`/post/${id}`)
export const updatePost = (id, data) => API.post(`/post/${id}`, data)
export const setProfileImage = (newpost) => API.post("/profile", newpost)
export const getProfileImage = () => API.get("/profile")