import axios from "axios";
import { genearateDate } from "../utils";

const commentsUrl = "http://localhost:3005/comments";

export const createComment = (userId, postId, content) =>
  axios
    .post(commentsUrl, {
      author_id: userId,
      post_id: postId,
      published_at: genearateDate(),
      content,
    })
    .then((response) => response.data);
