/* eslint-disable react/prop-types */
import styled from "styled-components";

const IconContainer = ({ className, id = "fa-code", inactive, ...props }) => (
  <div className={className} {...props}>
    <i className={`fa ${id}`} aria-hidden="true" />
  </div>
);
export const Icon = styled(IconContainer)`
  font-size: ${({ size = "21px" }) => size};
  margin: ${({ margin = "0" }) => margin};
  color: ${({ disabled }) => (disabled ? "#cccc" : "#000")};
  & :hover {
    cursor: ${({ inactive = false }) => (inactive ? "default" : "pointer")};
  }
`;
