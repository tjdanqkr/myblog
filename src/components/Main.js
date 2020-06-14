import React from "react";

const Main = (posts, loadingPost) => {
  return (
    <div className="Main">
      {loadingPost && <p>"로딩 중 .."</p>}

      {console.log(posts)}
      {!loadingPost &&
        posts &&
        posts.map(post => (
          <div>
            <p>{post.date}</p>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
    </div>
  );
};

export default Main;
