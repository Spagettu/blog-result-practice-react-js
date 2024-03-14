import axios from "axios";

const usersUrl = "http://localhost:3005/users";

export const getUsers = () =>
  axios(usersUrl).then((rawResponse) => rawResponse.data[0]);
