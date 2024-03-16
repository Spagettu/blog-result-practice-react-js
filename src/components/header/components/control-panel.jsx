/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Icon } from "./icon/icon";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../button/button";
import { useDispatch, useSelector } from "react-redux";
import { selectUserLogin, selectUserRole } from "../../../selectors";
import { ROLE } from "../../../constant";
import { ACTION_TYPE, selectUserSession, logout } from "../../../actions";

const RigthAligned = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "32px",
});

const StyledIcon = styled.div({
  "&:hover": {
    cursor: "pointer",
  },
  paddingTop: "2px",
});

const UserName = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "18px",
  fontWeight: "bold",
  marginRight: "5px",
});

// const AuthContainer = styled.div({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   width: "100%",
// });

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);
  const dispatch = useDispatch();

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
          <StyledIcon onClick={() => dispatch(logout(session))}>
            <Icon id="fa-sign-in" />
          </StyledIcon>
        </RigthAligned>
      )}

      <RigthAligned>
        <StyledIcon onClick={() => navigate(-1)}>
          <Icon id="fa-backward" margin="10px 0 0 0" />
        </StyledIcon>
        <Link to="/post">
          <Icon id="fa-file-text-o" margin="10px 0 0 18px" />
        </Link>
        <Link to="/users">
          <Icon id="fa-users" margin="10px 5px 0 18px" />
        </Link>
      </RigthAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)``;
