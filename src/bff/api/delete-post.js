import axios from "axios";

const url = "http://localhost:3005/posts";

export const deletePost = (postId) => axios.delete(url + "/" + postId);
