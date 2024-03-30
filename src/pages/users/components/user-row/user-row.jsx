import { Icon } from "../../../../components/header/components";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useState } from "react";
import { useServerRequest } from "../../../../hooks";
import { PROP_TYPE } from "../../../../constant";

/* eslint-disable react/prop-types */
export const UserRow = ({
  login,
  id,
  registeredAt,
  roleId: userRoleId,
  rolesList,
  onUserRemove,
}) => {
  const [selectedtRoleId, setSelectedRoleId] = useState(userRoleId);
  const [initialRoleId, setInitialRoleid] = useState(userRoleId);

  const requestServer = useServerRequest();
  const onRoleChange = ({ target }) => {
    setSelectedRoleId(Number(target.value));
  };

  const onRoleSave = (userId, newUserRoleId) => {
    requestServer("updateUserRole", userId, newUserRoleId).then(() =>
      setInitialRoleid(newUserRoleId)
    );
  };

  const isSaveButtonDisabled = selectedtRoleId === initialRoleId;

  return (
    <UserRowContainer>
      <BorderTableRow>
        <div className="login-column">{login}</div>
        <div className="registered-at-column">{registeredAt}</div>
        <div className="role-column">
          <select value={selectedtRoleId} onChange={onRoleChange}>
            {rolesList.map(({ id: roleId, name: roleName }) => (
              <option key={roleId} value={roleId}>
                {roleName}
              </option>
            ))}
          </select>
          <Icon
            id="fa-floppy-o"
            disabled={isSaveButtonDisabled}
            onClick={() => onRoleSave(id, selectedtRoleId)}
          />
        </div>
      </BorderTableRow>

      <Icon
        id="fa-trash-o"
        margin="5px 0 0 5px"
        onClick={() => onUserRemove(id)}
      />
    </UserRowContainer>
  );
};

const UserRowContainer = styled.div({
  display: "flex",
  width: "100%",
  marginTop: "3px",
});

const BorderTableRow = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  border: "1px solid black",

  width: "100%",

  "& .login-column": {
    width: "172px",
  },
  "& .registered-at-column": {
    width: "213px",
  },
  "& .role-column": {
    width: "auto",
    display: "flex",
    flexDirection: "row",
    padding: "3px",
  },
  "& div": {
    padding: "0 10px",
  },
});

UserRow.propTypes = {
  login: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  registeredAt: PropTypes.string.isRequired,
  roleId: PROP_TYPE.ROLE_ID.isRequired,
  rolesList: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
  onUserRemove: PropTypes.func.isRequired,
};
