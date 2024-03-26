/* eslint-disable react/prop-types */
import styled from "styled-components";
import { H2 } from "../../../../components";
import { Icon } from "../../../../components/header/components";
import { SpecialPanel } from "../special-panel/special-panel";
import { useNavigate } from "react-router-dom";

export const PostContent = ({
  post: { id, title, imageUrl, content, publishedAt },
}) => {
  const navigate = useNavigate();
  return (
    <PostContentContainer>
      <img src={imageUrl} alt={title} width={400} height={300} />
      <H2>{title}</H2>
      <SpecialPanel
        margin="20px 0"
        {...{ publishedAt, id }}
        editButton={
          <Icon
            id="fa-pencil-square-o"
            margin="0 10px 0 0"
            onClick={() => navigate(`/post/${id}/edit`)}
          />
        }
      />

      <div className="post-text">{content}</div>
    </PostContentContainer>
  );
};

const PostContentContainer = styled.div({
  "& img": {
    float: "left",
    margin: "0 20px 10px 0",
  },

  "& .post-text": {
    whiteSpace: "pre-line",
  },
});
