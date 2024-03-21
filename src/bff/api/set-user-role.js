import axios from "axios";

const usersUrl = "http://localhost:3005/users";

export const setUserRole = (userId, roleId) =>
  axios.patch(usersUrl + "/" + userId, {
    role_id: roleId,
  });
