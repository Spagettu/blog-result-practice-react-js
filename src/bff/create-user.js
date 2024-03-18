import axios from "axios";
import { usersUrl } from "./server";
import { genearateDate } from "./generate-date";

export const createUser = (regLogin, regPassword) =>
  axios
    .post(usersUrl, {
      login: regLogin,
      password: regPassword,
      role_id: 2,
      registered_at: genearateDate(),
    })
    .then((response) => response.data);
