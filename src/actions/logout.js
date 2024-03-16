import { server } from "../bff";
import { ACTION_TYPE } from "./action-type";

export const logout = (session) => {
  server.logout(session);
  return { type: ACTION_TYPE.LOGOUT };
};
