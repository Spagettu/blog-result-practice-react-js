import { useEffect, useState } from "react";
import styled from "styled-components";
import { useServerRequest } from "../../hooks";
import { PostCard } from "./components";
import { Pagination } from "./components/pagination/pagination";
import { PAGINATION_LIMIT } from "../../constant";

export const Main = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer("fetchPosts", page, PAGINATION_LIMIT).then(
      ({ res: { posts, count, error } }) => {
        if (error) {
          return;
        }

        setPosts(posts);
        setLastPage(count);
      }
    );
  }, [requestServer, page]);

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
      {lastPage > 1 && <Pagination {...{ setPage, page, lastPage }} />}
    </MainContainer>
  );
};

const MainContainer = styled.div({
  "& .post-list": {
    display: "flex",
    flexWrap: "wrap",
  },
});
