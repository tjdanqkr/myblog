import { handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";
import { call, put, takeLastest } from "redux-saga/effects";
import { startLoading, finishLoading } from "./loading";

const GET_POST = "main/GET_POST";
const GET_POST_SUCCESS = "main/GET_POST_SUCCESS";
const GET_POST_FAILURE = "main/GET_POST_FAILURE";

const GET_USERS = "main/GET_USERS";
const GET_USERS_SUCCESS = "main/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "main/GET_USERS_FAILURE";

//thunk
export const getPosts = createRequestThunk(GET_POST, api.getPosts);
//export const getPostcheck = createRequestThunk(GET_POST, api.getPostcheck);
// export const getPost = id => async dispatch => {
//   dispatch({ type: GET_POST }); //요청 시작
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
// };

// export const getUsers = () => async dispatch => {
//   dispatch({ type: GET_USERS }); //요청 시작
//   try {
//     const response = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
// };

const initialState = {
  posts: null,
};
const main = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      posts: action.payload,
    }),
  },
  initialState
);

export default main;
