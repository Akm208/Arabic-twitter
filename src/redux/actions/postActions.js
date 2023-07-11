import { DELETE, GET_POSTS, UPDATE_USER } from "../types";
import * as api from "../../api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export const getpost = () => async (dispatch) => {
  try {
    const { data } = await api.getPost();
    dispatch({ type: GET_POSTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
}


export const deletePost = (id) => async (dispatch) => {
  try {
    console.log("deleteid form dispatch", id)

    const result = await api.deletePost(id);
    dispatch(toast.success("Deleted Successfully"))
    console.log("actionsPost id", result)
    dispatch({ type: DELETE, payload: result })
    // dispatch({ type: DELETE, payload: id })
    return true
  }
  catch (err) {
    console.log(err.message)
    return false;
  }
}
export const updatePost = (id) => async (dispatch) => {
  try {
    console.log("update id", id)
    const result = await api.updatePost(id)
    dispatch({ type: UPDATE_USER, payload: result })
  }
  catch (err) {
    console.log(err.message)
  }
}