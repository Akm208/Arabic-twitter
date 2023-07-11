import { combineReducers } from "redux";
import postReducer from "./postReducers"
import profileReducers from "./profileReducers";
import usersReducers from "./usersReducers";
console.log("storeindex")
export default combineReducers({
post: postReducer,
profileImage:profileReducers,
userData : usersReducers
})