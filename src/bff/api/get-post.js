import axios from "axios";
import { transformPost } from "../transformer";

const postsUrl = "http://localhost:3005/posts";

export const getPost = async (postId) =>
  axios
    .get(postsUrl + `/${postId}`)
    .catch((res) => {
      const error =
        res.response.status == "404"
          ? "Такая страница не существует"
          : "Что-то пошло не так. Попробуйте позднее.";

      return Promise.reject(error);
    })
    .then((response) => response.data)
    .then((post) => post && transformPost(post));
