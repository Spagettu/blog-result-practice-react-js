import axios from "axios";
import { transformComment } from "../transformer";

const AllCommentsUrl = "http://localhost:3005/comments";
const PostCommentsUrl = "http://localhost:3005/comments?post_id=";

export const getComments = async (postId) => {
  const url = postId === undefined ? AllCommentsUrl : PostCommentsUrl + postId;

  return axios(url).then((response) =>
    response.data.map((comment) => transformComment(comment))
  );
};
