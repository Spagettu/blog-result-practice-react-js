export const removePostAsync = (requestServer, postId) => () =>
  requestServer("removePost", postId);
