/* eslint-disable react/prop-types */
import styled from "styled-components";

const H2Container = styled.h2({
  margin: "30px 0",
});

export const H2 = ({ children }) => {
  return <H2Container>{children}</H2Container>;
};
