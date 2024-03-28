/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { Button } from "../button/button";
import { useSelector } from "react-redux";
import {
  selectModalIsOpen,
  selectModalOnCancel,
  selectModalOnConfirm,
  selectModalText,
} from "../../selectors";

export const Modal = () => {
  const text = useSelector(selectModalText);
  const isOpen = useSelector(selectModalIsOpen);
  const onCancel = useSelector(selectModalOnCancel);
  const onConfirm = useSelector(selectModalOnConfirm);

  if (!isOpen) {
    return null;
  }
  return (
    <ModalContainer>
      <div className="overlay"></div>
      <div className="box">
        <h3>{text}</h3>
        <div className="buttons">
          <Button width={"120px"} onClick={onConfirm}>
            Да
          </Button>
          <Button width={"120px"} onClick={onCancel}>
            Отмена
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 20,

  "& .overlay": {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  "& .box": {
    position: "relative",
    top: "50%",
    // transform: "translateX(-50%)",
    width: "400px",
    zIndex: 30,
    margin: "0 auto",
    backgroundColor: "gray",
    border: "2px solid black",
    padding: "20px",
    textAlign: "center",
  },

  "& .buttons": {
    display: "flex",
    justifyContent: "center",
  },
  "& .buttons button": {
    margin: "0 5px",
  },
});
