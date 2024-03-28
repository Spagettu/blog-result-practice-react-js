import { getComments, getUsers } from "../api";

export const getPostCommentsWithAuthor = async (postId) => {
  const users = await getUsers();

  const comments = await getComments(postId);

  return comments.map((comment) => {
    const user = users.find(({ id }) => id === comment.authorId);

    return {
      ...comment,
      author: user?.login,
    };
  });
};
