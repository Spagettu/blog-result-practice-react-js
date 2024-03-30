import styled from "styled-components";
import { H2, PrivateContent } from "../../components";
import { useServerRequest } from "../../hooks";
import { useEffect, useState } from "react";
import { TableRow, UserRow } from "./components";
import { ROLE } from "../../constant";
import { checkAccess } from "../../utils";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors";

export const Users = () => {
  const [rolesList, setRolesList] = useState([]);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [shouldUpdateUsers, setShouldUpdateUsers] = useState(false);

  const requestServer = useServerRequest();

  const userRole = useSelector(selectUserRole);

  useEffect(() => {
    if (!checkAccess([ROLE.ADMIN], userRole)) {
      return;
    }

    Promise.all([
      requestServer("fetchRoles"),
      requestServer("fetchUsers"),
    ]).then(([rolesResponse, usersResponse]) => {
      if (usersResponse.error || rolesResponse.error) {
        setErrorMessage(usersResponse.error || rolesResponse.error);
        return;
      }

      setUsers(usersResponse.res);
      setRolesList(rolesResponse.res);
    });
  }, [requestServer, shouldUpdateUsers, userRole]);

  const onUserRemove = (userId) => {
    requestServer("removeUser", userId).then(() =>
      setShouldUpdateUsers((prev) => !prev)
    );
  };

  return (
    <UsersContainer>
      <PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
        <H2>Пользователи</H2>
        <TableRow>
          <div className="login-column">Логин</div>
          <div className="registered-at-column">Дата регистрации</div>
          <div className="role-column">Роль</div>
        </TableRow>
        {users.map(({ id, login, registeredAt, roleId }) => (
          <UserRow
            key={id}
            {...{ id, login, registeredAt, roleId, onUserRemove }}
            rolesList={rolesList.filter(({ id }) => id !== ROLE.GUEST)}
          />
        ))}
      </PrivateContent>
    </UsersContainer>
  );
};

const UsersContainer = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "570px",
  margin: "0 auto",
  fontSize: "18px",
});
