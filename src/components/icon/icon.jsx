/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import styled from "styled-components";

const IconContainer = ({ className, id, inactive, ...props }) => {
  return (
    <div className={className} {...props}>
      <i className={`fa ${id}`} aria-hidden="true" />
    </div>
  );
};
export const Icon = styled(IconContainer)`
  font-size: ${({ size = "21px" }) => size};
  margin: ${({ margin = "0" }) => margin};

  &:hover {
    cursor: ${({ inactive, disabled = false }) =>
      disabled || inactive ? "default" : "pointer"};
  }
  & i {
    color: ${({ disabled = false }) => (disabled ? "#808080" : "black")};
  }
`;

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  inactive: PropTypes.bool,
};
