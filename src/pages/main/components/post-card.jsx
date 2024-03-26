/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Icon } from "../../../components/header/components";
import { Link } from "react-router-dom";

export const PostCard = ({
  id,
  publishedAt,
  title,
  commentsCount,
  imageUrl,
}) => {
  return (
    <Link to={`/post/${id}`}>
      <PostCardContainer>
        <img src={imageUrl} alt={title} width={400} height={180} />
        <div className="post-card-footer">
          <h4>{title}</h4>
          <div className="post-card-info">
            <div className="published-at">
              <Icon
                id="fa-calendar-o"
                margin="0 10px 0 0"
                size="18px"
                inactive={true}
              />
              {publishedAt}
            </div>
            <div className="comments-count">
              <Icon
                id="fa-comment-o"
                margin="0 10px 0 0"
                size="18px"
                inactive={true}
              />
              {commentsCount}
            </div>
          </div>
        </div>
      </PostCardContainer>
    </Link>
  );
};

const PostCardContainer = styled.div({
  display: "flex",
  flexDirection: "column",

  width: "280px",
  margin: "20px",
  border: "2px solid black",

  "& img": {
    width: "100%",
    display: "block",
  },
  "& .comments-count": {
    display: "flex",
    textAlign: "center",
  },

  "& .post-card-info": {
    display: "flex",
    justifyContent: "space-between",
  },
  "& .published-at": {
    display: "flex",
  },
  "& .post-card-footer": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    borderTop: "1px solid black",
    padding: "5px",
  },
});
