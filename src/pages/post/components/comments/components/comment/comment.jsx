/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../../../components/header/components";

export const Comment = ({ id, author, content, publishedAt }) => {
  return (
    <CommentContainer key={id}>
      <div className="comment-container">
        <div className="information-panel">
          <div className="author">
            <Icon id="fa-user-circle-o" margin="0 10px 0 0" size="18px" />
            {author}
          </div>

          <div className="published-at">
            <Icon id="fa-calendar-o" margin="0 0 0 10px" size="18px" />
            {publishedAt}
          </div>
        </div>

        <div className="comment-text">{content}</div>
      </div>

      <div>
        <Icon
          id="fa-trash-o"
          margin="0 0 0 10px"
          size="18px"
          // onClick={() => ()}
        />
      </div>
    </CommentContainer>
  );
};

const CommentContainer = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  marginTop: "10px",

  "& .information-panel": {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "1rem",
  },

  "& .published-at": {
    display: "flex",
    gap: "10px",
  },

  "& .author": {
    display: "flex",
  },

  "& .comment-container": {
    border: "1px solid black",
    width: "100%",
    padding: "5px 10px",
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
  },
});
