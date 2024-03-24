import styled from "styled-components";
import { Content, H2 } from "../../components";
import { useServerRequest } from "../../hooks";
import { useEffect, useState } from "react";
import { TableRow, UserRow } from "./components";
import { ROLE } from "../../constant";

export const Users = () => {
  const [rolesList, setRolesList] = useState([]);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [shouldUpdateUsers, setShhouldUpdateUsers] = useState(false);
  const requestServer = useServerRequest();

  useEffect(() => {
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
  }, [requestServer, shouldUpdateUsers]);

  const onUserRemove = (userId) => {
    requestServer("removeUser", userId).then(() =>
      setShhouldUpdateUsers((prev) => !prev)
    );
  };

  return (
    <UsersContainer>
      <Content error={errorMessage}>
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
      </Content>
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
