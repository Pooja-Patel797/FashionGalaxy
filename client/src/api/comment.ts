import axios from "axios";
export default interface IComment {
  user: string;
  product: string;
  comment: string | null;
  rating: number | null;
  createdAt?: Date;
}

export const getCommentsById = async (id: string): Promise<Array<IComment>> => {
  const result = await axios.get("http://localhost:8000/comments/" + id);
  return result.data;
};
export const deleteComments = async (
  uid: string,
  pid: string
): Promise<IComment> => {
  const result = await axios.delete(
    "http://localhost:8000/comments" + uid + "/" + pid
  );
  return result.data;
};
export const updateComments = async (
  uid: string,
  pid: string
): Promise<IComment> => {
  const result = await axios.put(
    "http://localhost:8000/comments/" + uid + "/" + pid
  );
  return result.data;
};
export const createComments = async (comment: IComment): Promise<IComment> => {
  console.log(comment);
  const result = await axios.post("http://localhost:8000/comments", comment);
  return result.data;
};
