/* eslint-disable react/prop-types */
import styled from "styled-components";

export const Button = ({ children, ...props }) => {
  return <StyledButton {...{ ...props }}>{children}</StyledButton>;
};

const StyledButton = styled.button({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "18px",
  width: ({ width = "100%" }) => width,
  height: "32px",
  border: "1px solid #000",
  backgroundColor: ({ disabled }) => (disabled ? "gray" : " white"),

  "&:hover": {
    backgroundColor: "gray",
    cursor: ({ disabled }) => (disabled ? "default" : "pointer"),
  },
  ":nth-child(1n)": {
    width: "100%",
    height: "100%",
  },
});
