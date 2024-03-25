/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Icon } from "../../../../components/header/components";

export const SpecialPanel = ({ publishedAt, editButton, ...props }) => {
  return (
    <SpecialPanelContainer {...{ props }}>
      <div className="published-at">
        <Icon id="fa-calendar-o" margin="0 10px 0 0" size="18px" />
        {publishedAt}
      </div>
      <div className="buttons">
        {editButton}
        <Icon id="fa-trash-o" margin="0 10px 10px 0" />
      </div>
    </SpecialPanelContainer>
  );
};

const SpecialPanelContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  margin: ({ margin = "0px" }) => margin,
  fontSize: "18px",
  gap: "5px",

  "& .buttons": {
    display: "flex  ",
  },

  "& i": {
    position: "relative",
    top: "-1px",
  },

  "& img": {
    float: "left",
    margin: "0 20px 10px 0",
  },
});
