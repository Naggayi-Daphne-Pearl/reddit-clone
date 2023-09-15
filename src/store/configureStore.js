// src/store/configureStore.js

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"; // Import redux-thunk
import postReducer from "../reducers/postReducer";

const rootReducer = combineReducers({
  postReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
