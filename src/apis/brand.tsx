import client from "./client";

export const getBrandList = async () => {
  try {
    const response = await client.get("api/brand/");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
