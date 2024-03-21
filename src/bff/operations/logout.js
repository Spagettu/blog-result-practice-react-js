import { sessions } from "../sessions";

export const logout = (session) => {
  sessions.remove(session);
};
