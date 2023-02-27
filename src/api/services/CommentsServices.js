import axios from "axios";

export const getCommentsService = (postId = 9) => {
  return axios.get(`https://dummyjson.com/posts/${postId}/comments`);
};

export const addCommentsService = (comment) => {
  return axios.post("https://dummyjson.com/comments/add", comment);
};
