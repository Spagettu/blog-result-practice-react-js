/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Description, Logo } from "./components";
import { ControlPanel } from "./components/control-panel";

const Header = ({ className }) => (
  <header className={className}>
    <Logo />
    <Description />
    <ControlPanel />
  </header>
);
export const StyledHeader = styled(Header)`
  height: 120px;
  top: 0;
  position: fixed;
  padding: 20px 30px;
  width: 1000px;
  box-shadow: 0 3px 10px -1px black;
  background-color: #fff;
  display: flex;
  z-index: 1;
  justify-content: space-between;
`;
