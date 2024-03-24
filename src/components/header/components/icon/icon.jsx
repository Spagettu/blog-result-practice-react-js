/* eslint-disable react/prop-types */
import styled from "styled-components";

export const Icon = ({ id = "fa-code", ...props }) => {
  return (
    <IconContainer
      {...props}
      className={`fa ${id}`}
      aria-hidden="true"
    ></IconContainer>
  );
};

const IconContainer = styled.i({
  fontSize: ({ size = "21px" }) => size,
  margin: ({ margin = "0" }) => margin,
  color: ({ disabled }) => (disabled ? "#cccc" : "#000"),
  "&:hover": {
    cursor: "pointer",
  },
});
