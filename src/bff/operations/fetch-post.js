import { getComments, getPost } from "../api";

export const fetchPost = async (postId) => {
  const post = await getPost(postId);
  const comments = await getComments(postId);

  return {
    error: null,
    res: { ...post, comments },
  };
};
