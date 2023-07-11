/* eslint-disable import/no-anonymous-default-export */
import {CREATE, GET_USERS} from "../types";
const initialState = {
    users: null,
    usersLoading : true
}
export default (state=initialState, action)=>{
    switch(action.type){
        case CREATE : 
        return  [action.payload, ...state];
        case GET_USERS : 
        console.log("usersValues", action.payload)
        return {...state, users:action.payload, usersLoading:false}
        default :
        return state;
    }
}