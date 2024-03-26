/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Icon } from "../../../../components/header/components";
import { useDispatch } from "react-redux";
import { CLOSE_MODAL, openModal, removePostAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";
import { useNavigate } from "react-router-dom";

export const SpecialPanel = ({ id, publishedAt, editButton, ...props }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const navigate = useNavigate();

  const onPostDelete = (postId) => {
    dispatch(
      openModal({
        text: "Удалить статью?",
        onConfirm: () => {
          console.log("first");
          dispatch(removePostAsync(requestServer, postId)).then(() =>
            navigate("/")
          );

          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };

  return (
    <SpecialPanelContainer {...{ props }}>
      <div className="published-at">
        {publishedAt && (
          <Icon
            id="fa-calendar-o"
            margin="0 10px 0 0"
            size="18px"
            inactive={true}
          />
        )}
        {publishedAt}
      </div>
      <div className="buttons">
        {editButton}
        {publishedAt && (
          <Icon
            id="fa-trash-o"
            margin="0 10px 10px 0"
            onClick={() => onPostDelete(id)}
          />
        )}
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

  "& .published-at": {
    display: "flex",
    flexDirection: "row",
  },
});
