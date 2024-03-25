import { setPostData } from "./set-post-data";

export const removeCommentAsync = (requestServer, postId, id) => (dispacth) => {
  requestServer("removePostComment", postId, id).then((postData) =>
    dispacth(setPostData(postData.res))
  );
};
