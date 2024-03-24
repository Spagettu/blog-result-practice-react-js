import axios from "axios";
import { transformComment } from "../transformer";

const Url = "http://localhost:3005/comments";

export const getComments = (postId) =>
  axios(Url + "?post_id=" + postId).then((response) =>
    response.data.map((comment) => transformComment(comment))
  );
