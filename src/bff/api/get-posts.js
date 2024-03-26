import axios from "axios";
import { transformPost } from "../transformer";

const postsUrl = "http://localhost:3005/posts";

export const getPosts = async () =>
  axios
    .get(postsUrl)
    .then((response) => response.data)
    .catch((catchResponse) => console.log(catchResponse))
    .then((post) => post && post.map(transformPost));
