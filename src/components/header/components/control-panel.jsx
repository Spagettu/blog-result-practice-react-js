/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Icon } from "./icon/icon";
import { Link, useNavigate } from "react-router-dom";

const RigthAligned = styled.div({
  display: "flex",
  justifyContent: "flex-end",
});
const StyledLink = styled(Link)`
  fontsize: 18px;
  width: 100px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: #eee;
`;

const BackDiv = styled.div({
  "&:hover": {
    cursor: "pointer",
  },
});

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <RigthAligned>
        <StyledLink to="/login">Войти</StyledLink>
      </RigthAligned>
      <RigthAligned>
        <BackDiv onClick={() => navigate(-1)}>
          <Icon id="fa-backward" margin="10px 0 0 0" />
        </BackDiv>
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
