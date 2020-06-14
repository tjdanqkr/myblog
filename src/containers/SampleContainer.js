import React from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getUsercheck, getUsers } from "../modules/sample";

const { useEffect } = React;
const SampleContainer = ({
  getUsercheck,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getUsercheck();
        await getUsers();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getUsercheck, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    ></Sample>
  );
};
export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading["sample/GET_POST"],
    loadingUsers: loading["sample/GET_USERS"],
  }),
  {
    getUsercheck,
    getUsers,
  }
)(SampleContainer);
