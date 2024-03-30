/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Icon } from "../../icon/icon";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../button/button";
import { useDispatch, useSelector } from "react-redux";
import { selectUserLogin, selectUserRole } from "../../../selectors";
import { ROLE } from "../../../constant";
import { selectUserSession, logout } from "../../../actions";
import { checkAccess } from "../../../utils";

const RigthAligned = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "32px",
});

const UserName = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "18px",
  fontWeight: "bold",
  marginRight: "5px",
});

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout(session));
    sessionStorage.removeItem("userData");
  };

  const isAdmin = checkAccess([ROLE.ADMIN], roleId);

  return (
    <div className={className}>
      {roleId === ROLE.GUEST ? (
        <RigthAligned>
          <Button>
            <Link to="/login">Войти</Link>
          </Button>
        </RigthAligned>
      ) : (
        <RigthAligned>
          <UserName>{login}</UserName>

          <Icon id="fa-sign-in" onClick={onLogout} />
        </RigthAligned>
      )}

      <RigthAligned>
        <Icon
          id="fa-backward"
          margin="12px 0 0 0"
          onClick={() => navigate(-1)}
        />

        {isAdmin && (
          <>
            <Icon
              id="fa-file-text-o"
              margin="10px 0 0 18px"
              onClick={() => navigate("/post")}
            />

            <Icon
              id="fa-users"
              margin="10px 5px 0 18px"
              onClick={() => navigate("/users")}
            />
          </>
        )}
      </RigthAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)``;
