/* eslint-disable react/prop-types */
import styled from "styled-components";
import { H2 } from "../../../../components";
import { Icon } from "../../../../components/header/components";

export const PostContent = ({
  post: { id, title, imageUrl, content, publishedAt },
}) => {
  return (
    <PostContentContainer>
      <img src={imageUrl} alt={title} width={400} height={300} />
      <H2>{title}</H2>
      <div className="special-panel">
        <div className="published-at">
          <Icon id="fa-calendar-o" margin="0 10px 0 0" size="18px" />
          {publishedAt}
        </div>
        <div className="buttons">
          <Icon id="fa-pencil-square-o" margin="0 7px 0 0" size="18px" />
          <Icon id="fa-trash-o" margin="0 10px 0 0" size="18px" />
        </div>
      </div>

      <div>{content}</div>
    </PostContentContainer>
  );
};

const PostContentContainer = styled.div({
  "& img": {
    float: "left",
    margin: "0 20px 10px 0",
  },

  "& .special-panel": {
    margin: "-20px 0 20px",
    fontSize: "18px",
    display: "flex",
    justifyContent: "space-between",
  },
});
