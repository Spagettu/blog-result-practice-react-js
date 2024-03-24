import { useSelector } from "react-redux";
import { selectUserSession } from "../actions";
import { server } from "../bff";
import { useCallback } from "react";

export const useServerRequest = () => {
  const session = useSelector(selectUserSession);
  return useCallback(
    (operation, ...params) => {
      const request = ["register", "authorize", "fetchPost"].includes(operation)
        ? params
        : [session, ...params];
      return server[operation](...request);
    },
    [session]
  );
};
