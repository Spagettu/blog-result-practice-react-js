import { ROLE } from "../../constant";
import { deleteComment, deletePost, getComments } from "../api";
import { sessions } from "../sessions";

export const removePost = async (hash, postId, id) => {
  const accessRoles = [ROLE.ADMIN];
  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }

  await deletePost(postId);

  const comments = await getComments(postId);

  await Promise.all(
    comments.map(({ id: commentId }) => deleteComment(commentId))
  );

  return {
    res: true,
    error: null,
  };
};
