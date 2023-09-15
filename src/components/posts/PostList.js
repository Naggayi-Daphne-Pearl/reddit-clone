import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";

const PostList = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h1>Reddit Clone</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.data.id}>{post.data.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
