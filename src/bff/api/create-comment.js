import axios from "axios";
import { genearateDate } from "../utils";

const commentsUrl = "http://localhost:3005/comments";

export const createComment = (userId, postId, content, login) =>
  axios
    .post(commentsUrl, {
      author_id: userId,
      author_login: login,
      post_id: postId,
      published_at: genearateDate(),
      content,
    })
    .then((response) => response.data);
