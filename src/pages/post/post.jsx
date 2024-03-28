import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useState } from "react";
import { Comments, PostContent, PostForm } from "./components";
import { useMatch, useParams } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { RESET_POST_DATA, loadPostAsync } from "../../actions";
import { selectPost, selectUserRole } from "../../selectors";
import { Error, PrivateContent } from "../../components";
import { ROLE } from "../../constant";

export const Post = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const params = useParams();
  const requestServer = useServerRequest();
  const isEditing = !!useMatch("/post/:postId/edit");
  const isCreating = !!useMatch("/post");

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA);
  }, [dispatch, isCreating]);

  useEffect(() => {
    if (isCreating) {
      setIsLoading(false);
      return;
    }
    dispatch(loadPostAsync(requestServer, params.postId)).then((postData) => {
      setError(postData.error);

      setIsLoading(false);
    });
  }, [dispatch, requestServer, params.postId, isCreating]);

  if (isLoading) {
    return null;
  }

  const SpecificPostPage = () =>
    isEditing || isCreating ? (
      <PrivateContent access={[ROLE.ADMIN]} serverError={error}>
        <PostForm post={post} />
      </PrivateContent>
    ) : (
      <>
        <PostContent post={post} />
        <Comments comments={post.comments} postId={post.id} />
      </>
    );

  return error ? (
    <Error error={error} />
  ) : (
    <PostContainer>
      <SpecificPostPage></SpecificPostPage>
    </PostContainer>
  );
};

const PostContainer = styled.div({
  padding: "0 40px",
});
//
