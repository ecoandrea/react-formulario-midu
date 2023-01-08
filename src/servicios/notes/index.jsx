import axios from "axios";

export const create = ({ title, body, userId }) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/posts/1/comments", {
      title,
      body,
      userId,
    })
    .then((response) => {
      const { data } = response;
      return data;
    });
};

export const getAll = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((response) => {
      const { data } = response;
      return data;
    });
};
