import { ROLE } from "../../constant";
import { createComment, getPost } from "../api";
import { sessions } from "../sessions";
import { getPostCommentsWithAuthor } from "../utils";

export const addComment = async (userSession, userId, postId, content) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }
  await createComment(userId, postId, content);

  const post = await getPost(postId);

  const commentsWithAuthor = await getPostCommentsWithAuthor(postId);

  return {
    res: {
      ...post,
      comments: commentsWithAuthor,
    },
    error: null,
  };
};
