import axios from "axios";

const url = "http://localhost:3005/posts";

export const updatePost = ({ id, imageUrl, title, content }) =>
  axios
    .patch(url + "/" + id, {
      image_url: imageUrl,
      title,
      content,
    })
    .then((loadedPost) => loadedPost.data);
