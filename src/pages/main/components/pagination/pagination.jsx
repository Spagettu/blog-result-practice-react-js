/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../../../../components";

export const Pagination = ({ page, setPage, lastPage }) => {
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
  position: "absolute",
  display: "flex",
  justifyContent: "center",

  padding: "0 60px 0 20px",
  gap: "10px",
  fontSize: "18px",
  width: "100%",

  "& .current-page": {
    width: "100%",
    height: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    paddingTop: "5px",

    border: "2px solid black",
  },
});

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  lastPage: PropTypes.number.isRequired,
};
