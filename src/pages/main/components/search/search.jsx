/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Input } from "../../../../components";
import { Icon } from "../../../../components/header/components";

export const Search = ({ searchPhrase, onChange }) => {
  return (
    <SearchContainer>
      <Input
        value={searchPhrase}
        onChange={onChange}
        placeholder="Поиск по заголовкам"
      />
      <Icon inactive={true} id="fa-search" size="22px" />
    </SearchContainer>
  );
};

const SearchContainer = styled.div({
  display: "flex",
  width: "340px",
  height: "30px",
  margin: "0 auto",
  border: "1px solid black",
  "&  i": {
    position: "absolute",
    marginLeft: "-25px",
    marginTop: "3px",
  },
  "& input": {
    padding: "10px 25px 10px 5px",
  },
});
