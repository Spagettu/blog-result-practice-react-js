/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import styled from "styled-components";

export const TableRow = ({ children }) => {
  return <TableRowContainer>{children}</TableRowContainer>;
};

const TableRowContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "570px",

  "& .login-column": {
    width: "172px",
  },
  "& .registered-at-column": {
    width: "213px",
    margin: "0 30px 0 0",
  },
  "& .role-column": {
    width: "auto",
    marginRight: "40px",
  },
  "& div": {
    padding: "0 10px",
  },
});

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};
