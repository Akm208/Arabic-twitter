
import { GET_POSTS, DELETE, UPDATE_USER } from './../types/index';

const intitialState = {
    posts: null,
    postLoading: true
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = intitialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            console.log("postsValues", action.payload)
            return { ...state, posts: action.payload, postLoading: false };
        case DELETE:
            return state.posts.filter((post) => post._id !== action.payload)
        case UPDATE_USER :
            return state.posts.map((post)=>
                post._id === action.payload._id ?action.payload: post
            );
        default:
            return state;
    }
}