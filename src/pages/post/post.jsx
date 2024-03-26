import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useLayoutEffect } from "react";
import { Comments, PostContent, PostForm } from "./components";
import { useMatch, useParams } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { RESET_POST_DATA, loadPostAsync } from "../../actions";
import { selectPost } from "../../selectors";

export const Post = () => {
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const params = useParams();
  const requestServer = useServerRequest();
  const isEditing = useMatch("/post/:postId/edit");
  const isCreating = useMatch("/post");

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA);
  }, [dispatch, isCreating]);

  useEffect(() => {
    if (isCreating) {
      return;
    }
    dispatch(loadPostAsync(requestServer, params.postId));
  }, [dispatch, requestServer, params.postId, isCreating]);

  return (
    <PostContainer>
      {isEditing || isCreating ? (
        <PostForm post={post} />
      ) : (
        <>
          <PostContent post={post} />
          <Comments comments={post.comments} postId={post.id} />
        </>
      )}
    </PostContainer>
  );
};

const PostContainer = styled.div({
  padding: "40px 80px",
});
