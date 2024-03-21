import axios from "axios";

const usersUrl = "http://localhost:3005/roles";

export const getRoles = () => axios(usersUrl).then((response) => response.data);
