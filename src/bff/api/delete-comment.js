import axios from "axios";

const url = "http://localhost:3005/comments";

export const deleteComment = (commentId) =>
  axios.delete(url + "/" + commentId).then((response) => response.data);
