import { ACTION_TYPE } from "../actions";

const initialPostsState = {};

export const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_POST_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
