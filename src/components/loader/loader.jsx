import styled from "styled-components";

export const Loader = () => {
  return <LoaderContainer>Данные загружаются...</LoaderContainer>;
};

const LoaderContainer = styled.div({
  display: "flex",
  fontSize: "40px",
  color: "red",
  paddingTop: "150px",
});
