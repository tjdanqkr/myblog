import React from "react";
import { connect } from "react-redux";
import Sample from "../components/Main";
import { getPostcheck, getPosts } from "../modules/main";
import Main from "../components/Main";

const { useEffect } = React;
const MainContainer = ({ posts, loadingPost, getPosts }) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getPosts();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getPosts]);
  return <Main posts={posts} loadingPost={loadingPost}></Main>;
};
export default connect(
  ({ main, loading }) => ({
    posts: main.posts,
    loadingPost: loading["main/GET_POST"],
  }),
  {
    getPosts,
  }
)(MainContainer);
