import { getUser } from "./get-user";
import { createUser } from "./create-user";
import { createSession } from "./create-session";

export const usersUrl = "http://localhost:3005/users";

export const server = {
  async authorize(authLogin, authPassword) {
    const user = await getUser(authLogin);

    if (!user) {
      return {
        res: null,
        error: "Пользователь не найден",
      };
    }

    if (authPassword != user.password) {
      return {
        res: null,
        error: "Неверный пароль",
      };
    }

    return {
      res: createSession(user.role_id),
      error: null,
    };
  },

  async register(regLogin, regPassword) {
    const user = await getUser(regLogin);

    await createUser(regLogin, regPassword);

    if (user) {
      return {
        res: null,
        error: "Такой логин уже существует",
      };
    }

    return {
      res: createSession(user.role_id),
      error: null,
    };
  },
};
