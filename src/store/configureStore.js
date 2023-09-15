// src/store/configureStore.js

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"; // Import redux-thunk
import postReducer from "../reducers/postReducer";
import commentReducer from "../reducers/commentReducer"; // Import your comment reducer

const rootReducer = combineReducers({
  postReducer,
  commentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
