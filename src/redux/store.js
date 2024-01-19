import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import searchReducer from "./reducers/searchReducer";
import songsReducer from "./reducers/songsReducer";

const AllReducers = combineReducers({
  search: searchReducer,
  songs: songsReducer,
});

const store = createStore(AllReducers, applyMiddleware(thunk));

export default store;
