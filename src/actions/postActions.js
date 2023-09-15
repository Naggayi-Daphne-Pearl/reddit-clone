import axios from 'axios';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPosts = () => {
  return (dispatch) => {
    axios.get('https://www.reddit.com/r/all.json')
      .then((response) => {
        const posts = response.data.data.children;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((error) => {
        // Handle errors
      });
  };
};
