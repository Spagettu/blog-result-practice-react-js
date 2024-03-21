import axios from "axios";

const usersUrl = "http://localhost:3005/users";

export const deleteUser = (userId) =>
  axios.delete(usersUrl + "/" + userId).then((response) => response.data);
