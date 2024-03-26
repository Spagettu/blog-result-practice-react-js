import { useEffect, useState } from "react";
import styled from "styled-components";
import { useServerRequest } from "../../hooks";
import { PostCard } from "./components";

export const Main = () => {
  const [posts, setPosts] = useState([]);
  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer("fetchPosts").then((posts) => {
      if (posts.error) {
        return;
      }

      setPosts(posts.res);
    });
  }, [requestServer]);

  console.log(posts);

  return (
    <MainContainer>
      <div className="post-list">
        {posts.map(({ id, publishedAt, title, commentsCount, imageUrl }) => (
          <PostCard
            key={id}
            {...{ id, publishedAt, title, commentsCount, imageUrl }}
          />
        ))}
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div({
  "& .post-list": {
    display: "flex",
    flexWrap: "wrap",
  },
});
