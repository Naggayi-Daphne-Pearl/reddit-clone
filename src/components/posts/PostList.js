import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";

const PostList = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="post-list-container">
      <h1>Reddit Clone</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.data.id} className="post">
            <div className="post-thumbnail">
              {post.data.thumbnail && (
                <img src={post.data.thumbnail} alt="Thumbnail" />
              )}
            </div>
            <div className="post-content">
              <h2>{post.data.title}</h2>
              <p>Posted by u/{post.data.author}</p>
              <p>{post.data.num_comments} comments</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
