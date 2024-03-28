/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledButton = ({ className, children, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export const Button = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: ${({ width = "100%" }) => width};
  height: 32px;
  border: 2px solid #000;
  background-color: ${({ disabled }) => (disabled ? "gray" : " white")};

  &:hover {
    background-color: gray;
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  }
  :nth-child(1n) {
    width: 100%;
    height: 100%;
  }
`;
