import styled from "styled-components";

const StyledDiv = styled.div({
  fontStyle: "italic",
  padding: "10px",
});

export const Description = () => {
  return (
    <StyledDiv>
      Веб-технология
      <br />
      Написание кода
      <br />
      Разбор ошибок
    </StyledDiv>
  );
};
