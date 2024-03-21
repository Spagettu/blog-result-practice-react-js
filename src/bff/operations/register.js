import { createUser, getUser } from "../api";
import { sessions } from "../sessions";

export const register = async (regLogin, regPassword) => {
  const user = await getUser(regLogin);

  if (user) {
    return {
      res: null,
      error: "Такой логин уже существует",
    };
  }
  const createdUser = await createUser(regLogin, regPassword);

  return {
    res: {
      id: createdUser.id,
      login: createdUser.login,
      roleId: createdUser.role_id,
      session: sessions.create(createdUser),
    },
    error: null,
  };
};
