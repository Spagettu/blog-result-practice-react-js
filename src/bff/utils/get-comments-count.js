export const getCommentsCount = (comments = [], postId) => {
  const postComment = comments.filter(
    ({ postId: commentPostId }) => commentPostId === postId
  );
  return postComment.length;
};
