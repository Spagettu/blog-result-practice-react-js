import { ROLE } from "../../constant";
import { createComment, deleteComment, getComments, getPost } from "../api";
import { sessions } from "../sessions";
import { getPostCommentsWithAuthor } from "../utils";

export const removePostComment = async (hash, postId, id) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }

  await deleteComment(id);

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
