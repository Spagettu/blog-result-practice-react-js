import axios from "axios";
import { transformUser } from "../transformer";

const usersUrl = "http://localhost:3005/users";

export const getUsers = () =>
  axios
    .get(usersUrl)
    .then((rawResponse) => rawResponse && rawResponse.data.map(transformUser));
