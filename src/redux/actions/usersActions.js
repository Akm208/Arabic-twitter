import { CREATE, GET_USERS } from "../types";
import * as api from "../../api"

export const createUser = (post) => async (dispatch) => {

    try {
        console.log(post)
        const { data } = await api.createUsers(post)
        dispatch({ type: CREATE, payload: data })
    }
    catch (error) {
        console.log(error.message)
    }
}
export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getUsers();
        dispatch({ type: GET_USERS, payload: data });
    }
    catch (error) {
        console.log(error.messsage)
    }
}