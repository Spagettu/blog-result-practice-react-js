import { ROLE } from "../../constant";
import { updatePost } from "../api";
import { sessions } from "../sessions";

export const savePost = async (hash, newPostData) => {
  const accessRoles = [ROLE.ADMIN];

  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }

  const updatedPost = await updatePost(newPostData);

  return {
    res: updatedPost,
    error: null,
  };
};
