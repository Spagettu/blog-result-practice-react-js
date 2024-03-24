import { setPostData } from "./set-post-data";

export const addCommentAsync =
  (requestServer, userId, postId, content, login) => (dispacth) => {
    requestServer("addComment", userId, postId, content, login).then(
      (postData) => dispacth(setPostData(postData.res))
    );
  };
