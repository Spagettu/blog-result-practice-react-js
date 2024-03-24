import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Comments, PostContent } from "./components";
import { useParams } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { loadPostAsync } from "../../actions";
import { selectPost } from "../../selectors";

export const Post = () => {
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const params = useParams();
  const requestServer = useServerRequest();

  useEffect(() => {
    dispatch(loadPostAsync(requestServer, params.postId));
  }, [dispatch, requestServer, params.postId]);

  return (
    <PostContainer>
      <PostContent post={post}></PostContent>
      <Comments comments={post.comments} postId={post.id} />
    </PostContainer>
  );
};

const PostContainer = styled.div({
  padding: "40px 80px",
  marginBottom: "120px",
});
