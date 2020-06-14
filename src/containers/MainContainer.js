import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getPostcheck, getPosts } from "../modules/main";
import Main from "../components/Main";

const MainContainer = () => {
  const { main, loading } = useSelector(state => state, shallowEqual);
  const { posts } = main;
  const { loadingPost } = loading;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return <Main posts={posts} loadingPost={loadingPost}></Main>;
};

export default MainContainer;
