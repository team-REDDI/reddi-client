import client from "./client";

export const getBrandList = async () => {
  const response = await client.get(`/api/brand`);
  return response.data;
};
