/* eslint-disable react/prop-types */
import styled from "styled-components";
import { H2 } from "../h2/h2";

export const Content = ({ children, error }) =>
  error ? (
    <Div>
      <H2>Ошибка</H2>
      <div>{error}</div>
    </Div>
  ) : (
    children
  );

const Div = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});
