import axios from "axios";
const createNote = ({ title, body, userId }) => {
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

export default createNote;
