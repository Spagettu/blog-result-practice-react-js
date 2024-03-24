import axios from "axios";
import { transformPost } from "../transformer";

const postsUrl = "http://localhost:3005/posts";

export const getPost = async (postId) =>
  axios
    .get(postsUrl + `/${postId}`)
    .then((response) => response.data)
    .catch((catchResponse) => console.log(catchResponse))
    .then((post) => post && transformPost(post));
