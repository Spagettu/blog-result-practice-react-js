import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import {
  appReducer,
  postReducer,
  postsReducer,
  userReducer,
  usersReducer,
} from "./reducers";

const reducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  post: postReducer,
  posts: postsReducer,
  app: appReducer,
});

const composeEnhagers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = createStore(
  reducer,
  composeEnhagers(applyMiddleware(thunk))
);
