import { ROLE } from "../../constant";
import { createComment, getComments, getPost } from "../api";
import { sessions } from "../sessions";

export const addComment = async (
  userSession,
  userId,
  postId,
  content,
  login
) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }
  await createComment(userId, postId, content, login);

  const post = await getPost(postId);

  const comments = await getComments(postId);

  return {
    res: {
      ...post,
      comments,
    },
    error: null,
  };
};
