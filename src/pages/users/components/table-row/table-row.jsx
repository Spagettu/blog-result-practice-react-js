/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import styled from "styled-components";

export const TableRow = ({ children }) => {
  return <TableRowContainer>{children}</TableRowContainer>;
};

const TableRowContainer = styled.div({
  display: "flex",
  // border: ({ a = "none" }) => (a ? a : "none"),
  alignItems: "center",
  width: "570px",

  "& .login-column": {
    width: "172px",
  },
  "& .registered-at-column": {
    width: "213px",
  },
  "& .role-column": {
    width: "auto",
  },
  "& div": {
    padding: "0 10px",
  },
});

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};
