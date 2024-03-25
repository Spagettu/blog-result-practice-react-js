import { setPostData } from "./set-post-data";

export const addCommentAsync =
  (requestServer, userId, postId, content, login) => (dispatch) => {
    requestServer("addComment", userId, postId, content, login).then(
      (postData) => dispatch(setPostData(postData.res))
    );
  };
