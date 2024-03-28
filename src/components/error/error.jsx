/* eslint-disable react/prop-types */
import styled from "styled-components";
import { H2 } from "../h2/h2";

export const Error = ({ error }) =>
  error && (
    <ErrorContainer>
      <H2>Ошибка</H2>
      <div>{error}</div>
    </ErrorContainer>
  );
const ErrorContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  fontSize: "18px",
});
