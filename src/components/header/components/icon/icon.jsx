/* eslint-disable react/prop-types */
import styled from "styled-components";

const IconContainer = ({ className, id = "fa-code" }) => {
  return (
    <div className={className}>
      <i className={`fa ${id}`} aria-hidden="true"></i>
    </div>
  );
};

export const Icon = styled(IconContainer)`
  font-size: ${({ size = "20px" }) => size};
  margin: ${({ margin = 0 }) => margin};
`;
