import axios from "axios";

import { genearateDate } from "../utils";

const url = "http://localhost:3005/posts";

export const createPost = ({ imageUrl, title, content }) =>
  axios
    .post(url, {
      image_url: imageUrl,
      published_at: genearateDate(),
      title,
      content,
    })
    .then((response) => response.data);
