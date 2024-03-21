import axios from "axios";
import { transformUser } from "../transformer";

const usersUrl = "http://localhost:3005/users";

export const getUser = async (loginToFind) =>
  axios
    .get(usersUrl + `?q=${loginToFind}`)
    .then((response) => response.data[0])
    .then((user) => user && transformUser(user));
