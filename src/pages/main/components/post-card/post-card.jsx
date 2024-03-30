/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "../../../../components/header/components";
import { Link } from "react-router-dom";

export const PostCardContainer = ({
  className,
  id,
  publishedAt,
  title,
  commentsCount,
  imageUrl,
}) => {
  return (
    <div className={className}>
      <Link to={`/post/${id}`}>
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
      </Link>
    </div>
  );
};

export const PostCard = styled(PostCardContainer)`
  & a {
    display: flex;
    flex-direction: column;
    height: 290px;

    width: 280px;
    margin: 20px;
    border: 2px solid black;
  }
  & a h4 {
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-align: center;
  }
  & a h4:hover {
    color: transparent;

    overflow: visible;
    display: -webkit-box;
    -webkit-line-clamp: 3;
  }

  & a h4:hover::after {
    position: absolute;
    padding-left: 2px;
    width: 100%;
    top: 0;
    left: -2px;
    background-color: white;
    overflow-wrap: break-word;
    text-align: center;
    color: black;
    content: ${({ title }) => `"${title}"`};
    opacity: 0.9;
    z-index: 20;
  }
  & img {
    width: 100%;
    display: block;
  }
  & .comments-count {
    display: flex;
    text-align: center;
  }

  & .post-card-info {
    display: flex;
    justify-content: space-between;
  }
  & .published-at {
    display: flex;
  }
  & .post-card-footer {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    border-top: 1px solid black;
    padding: 5px;
  }
`;

PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  commentsCount: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
