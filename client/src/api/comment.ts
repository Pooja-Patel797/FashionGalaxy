import axios from "axios";
type Comment = {
  user: string;
  product: string;

  comment: string | null;
  rating: number | null;
};

export const getCommentsById = async (id: string) => {
  let result = await axios.get("http://localhost:8000/comments/" + id);
  return result.data;
};
export const deleteComments = async (uid: string, pid: string) => {
  let result = await axios.delete(
    "http://localhost:8000/comments" + uid + "/" + pid
  );
  return result;
};
export const updateComments = async (uid: string, pid: string) => {
  let result = await axios.put("http://localhost:8000/comments");
  return result;
};
export const createComments = async (comment: Comment) => {
  console.log(comment);
  let result = await axios.post("http://localhost:8000/comments", comment);
  return result.data;
};
