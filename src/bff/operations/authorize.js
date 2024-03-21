import { getUser } from "../api";
import { sessions } from "../sessions";

export const authorize = async (authLogin, authPassword) => {
  const user = await getUser(authLogin);

  if (!user) {
    return {
      res: null,
      error: " Пользователь не найден",
    };
  }

  const { id, password, login, roleId } = user;

  if (authPassword != password) {
    return {
      res: null,
      error: " Неверный пароль",
    };
  }

  const session = sessions.create();
  sessions.create(session);

  return {
    res: {
      id,
      login,
      roleId,
      session: sessions.create(user),
    },
    error: null,
  };
};
