/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import { Comment } from "./components";
import { Icon } from "../../../../components/header/components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserId,
  selectUserLogin,
  selectUserRole,
} from "../../../../selectors";
import { useServerRequest } from "../../../../hooks";
import { addCommentAsync } from "../../../../actions";
import { PROP_TYPE, ROLE } from "../../../../constant";

export const Comments = ({ comments, postId }) => {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const requestServer = useServerRequest();
  const login = useSelector(selectUserLogin);
  const userRole = useSelector(selectUserRole);

  const onNewCommentAdd = (currentUserId, selectedPostId, content) => {
    if (content) {
      dispatch(
        addCommentAsync(
          requestServer,
          currentUserId,
          selectedPostId,
          content,
          login
        )
      );
      setNewComment("");
    } else return;
  };

  const isGuest = userRole === ROLE.GUEST;

  return (
    <CommentsContainer>
      {!isGuest && (
        <div className="new-comment">
          <textarea
            name="comment"
            value={newComment}
            placeholder="Комментарий..."
            onChange={({ target }) => setNewComment(target.value)}
          />
          <Icon
            id="fa-paper-plane-o"
            margin="0 0 0 10px"
            size="18px"
            onClick={() => onNewCommentAdd(userId, postId, newComment)}
          />
        </div>
      )}

      <div className="comments">
        {comments.map(({ id, author, content, publishedAt }) => (
          <Comment key={id} {...{ id, postId, author, content, publishedAt }} />
        ))}
      </div>
    </CommentsContainer>
  );
};

const CommentsContainer = styled.div({
  width: "580px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  margin: "10px  auto",

  "& .new-comment": {
    width: "100%",
    display: "flex",
    margin: "20px 0 0 ",
  },

  "&  textarea": {
    width: "100%",
    resize: "none",
    fontSize: "18px",
    height: "120px",
  },

  "&  .comments": {
    width: "100%",
  },
});

Comments.propTypes = {
  comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
  postId: PropTypes.string.isRequired,
};
