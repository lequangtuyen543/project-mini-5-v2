import { GET } from "../utils/request";

export const getTopicList = async () => {
  const result = await GET(`topics`);
  return result;
}; 

export const getTopicById = async (id) => {
  const result = await GET(`topics/${id}`);
  return result;
}; 