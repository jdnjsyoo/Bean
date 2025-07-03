import { instance } from "./axios";

export const getCafes = async () => {
  const response = await instance.get("/cafe/");
  return response.data;
};
export const getChatbot = async (data) => {
  const response = await instance.post("/cafe/chat/", data);
  return response.data;
};

export const getCafeTagRating = async (tagId, cafeId) => {
  const response = await instance.get(`/cafe/tagrating/${tagId}/`, cafeId);
  return response.data;
};
