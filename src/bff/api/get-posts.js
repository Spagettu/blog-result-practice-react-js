import axios from "axios";
import { transformPost } from "../transformer";

const postsUrl = "http://localhost:3005/posts";

export const getPosts = async (page, limit) =>
  axios
    .get(postsUrl + "?_page=" + page + "&_limit=" + limit)
    .then((response) =>
      Promise.all([response.data, response.headers["x-total-count"]])
    )
    .then(([post, count]) => ({
      posts: post && post.map(transformPost),
      count,
    }))
    .catch((catchResponse) => console.log(catchResponse));
