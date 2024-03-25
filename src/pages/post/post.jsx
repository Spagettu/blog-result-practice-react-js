import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Comments, PostContent, PostForm } from "./components";
import { useMatch, useParams } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { loadPostAsync } from "../../actions";
import { selectPost } from "../../selectors";

export const Post = () => {
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const params = useParams();
  const requestServer = useServerRequest();
  const isEditing = useMatch("/post/:postId/edit");

  useEffect(() => {
    dispatch(loadPostAsync(requestServer, params.postId));
  }, [dispatch, requestServer, params.postId]);

  return (
    <PostContainer>
      {isEditing ? (
        <PostForm post={post} />
      ) : (
        <>
          <PostContent post={post}></PostContent>
          <Comments comments={post.comments} postId={post.id} />
        </>
      )}
    </PostContainer>
  );
};

const PostContainer = styled.div({
  padding: "40px 80px",
});
