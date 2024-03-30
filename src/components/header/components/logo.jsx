/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Icon } from "../../icon/icon";
import { Link } from "react-router-dom";

const LargeText = styled.div({
  fontSize: "48px",
  fontWeight: "600",
});

const SmallText = styled.div({
  fontSize: "18px",
  fontWeight: "bold",
  marginTop: "-10px",
});

export const LogoContainer = ({ className }) => {
  return (
    <Link to="/" className={className}>
      <Icon id="fa-code" size="70px" />
      <div>
        <LargeText>Блог</LargeText>
        <SmallText>веб-разработчика</SmallText>
      </div>
    </Link>
  );
};
export const Logo = styled(LogoContainer)`
  display: flex;
  text-decoration: none;
  gap: 5px;
`;
