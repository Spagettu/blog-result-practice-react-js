import { getUser } from "./get-user";
import { createUser } from "./create-user";
import { addSession } from "./create-session";
import { sessions } from "./sessions";

export const usersUrl = "http://localhost:3005/users";

export const server = {
  async authorize(authLogin, authPassword) {
    const user = await getUser(authLogin);

    if (!user) {
      return {
        res: null,
        error: " Пользователь не найден",
      };
    }

    if (authPassword != user.password) {
      return {
        res: null,
        error: " Неверный пароль",
      };
    }

    const session = sessions.create();
    sessions.create(session);

    return {
      res: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session,
      },
      error: null,
    };
  },

  async register(regLogin, regPassword) {
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
  },
  async logout(session) {
    sessions.remove(session);
  },
};
