import { ROLE } from "../../constant";
import { setUserRole } from "../api";
import { sessions } from "../sessions";

export const updateUserRole = async (userSession, userId, newUserRoleId) => {
  const accessRoles = [ROLE.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }

  setUserRole(userId, newUserRoleId);

  return {
    error: null,
    res: true,
  };
};
