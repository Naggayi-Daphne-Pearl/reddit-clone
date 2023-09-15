// src/reducers/commentReducer.js

const initialState = {
  comments: {}, // Store comments by post ID
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      const { postId, comment } = action.payload;
      return {
        ...state,
        comments: {
          ...state.comments,
          [postId]: [...(state.comments[postId] || []), comment],
        },
      };
    // Add more cases to handle updating and deleting comments
    default:
      return state;
  }
};

export default commentReducer;
