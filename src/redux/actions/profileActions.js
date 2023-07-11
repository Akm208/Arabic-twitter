import { DELETE, GET_PROFILE } from "../types";
import * as api from "../../api";


export const getprofile = () => async (dispatch) => {
    try {
      const { data } = await api.getProfileImage();
      dispatch({ type: GET_PROFILE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  }
  