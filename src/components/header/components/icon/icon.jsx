/* eslint-disable react/prop-types */
import styled from "styled-components";

export const Icon = ({ id = "fa-code", ...props }) => {
  return (
    <IconContainer {...props}>
      <i className={`fa ${id}`} aria-hidden="true" />
    </IconContainer>
  );
};

const IconContainer = styled.div({
  fontSize: ({ size = "20px" }) => size,
  margin: ({ margin = 0 }) => margin,

  "&:hover": {
    cursor: "pointer",
  },
  "& i": {
    color: ({ disabled }) => (disabled ? "#cccc" : "#000"),
  },
});
