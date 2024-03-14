import axios from "axios";
import { usersUrl } from "./bff";
import { genearateDate } from "./generate-date";

export const createUser = async (regLogin, regPassword) => {
  await axios.post(usersUrl, {
    login: regLogin,
    passwordL: regPassword,
    role_id: 2,
    registered_at: genearateDate(),
  });
};
