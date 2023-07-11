/* eslint-disable default-case */
import { GET_PROFILE } from "../types";
const initialState = {
    profileImage : null,
    imageLoading : false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState, action)=>{
   switch(action.type){
       case GET_PROFILE: 
       return {...state, profileImage:action.payload, imageLoading: true};
       default:
           return state;
   }
}