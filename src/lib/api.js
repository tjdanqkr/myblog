import Axios from "axios";

export const getUsercheck = id => Axios.get(`/api/json/`);

export const getUsers = () => Axios.get(`/api/json/`);

export const getPostcheck = category => Axios.get(`/api/post/add`);

export const insertPost = json => Axios.post(`/api/post/add`, json);

export const getPosts = () => Axios.get(`/api/posts/`);
