import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      <h2>Comments</h2>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <p className="comment-text">{comment.text}</p>
              <p className="comment-author">- {comment.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
