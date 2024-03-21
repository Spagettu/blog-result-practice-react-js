import axios from "axios";

import { genearateDate } from "../utils/generate-date";

const usersUrl = "http://localhost:3005/users";

export const createUser = (regLogin, regPassword) =>
  axios
    .post(usersUrl, {
      login: regLogin,
      password: regPassword,
      role_id: 2,
      registered_at: genearateDate(),
    })
    .then((response) => response.data);
