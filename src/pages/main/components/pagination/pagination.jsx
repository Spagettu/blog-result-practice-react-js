/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Button } from "../../../../components";

export const Pagination = ({ page, setPage, lastPage }) => {
  console.log(lastPage);
  return (
    <PaginationContainer>
      <Button disabled={page === 1} onClick={() => setPage(1)}>
        В начало
      </Button>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Предыдущая
      </Button>
      <div className="current-page">Страница{page}</div>
      <Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
        Следующая
      </Button>
      <Button disabled={page === lastPage} onClick={() => setPage(1)}>
        В конец
      </Button>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  margin: "10px 0",
  padding: "0 20px",
  gap: "10px",
  fontSize: "18px",

  "& .current-page": {
    width: "100%",
    height: "32px",
    textAlign: "center",
    border: "1px solid black",
  },
});
