import client from "./client";

export const getHotBrand = async (info: { n?: number }) => {
  try {
    const response = await client.get("api/brand/top", {
      params: {
        n: info.n,
      },
    });
    // console.log("hot brand data", response.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getHotPost = async (info: { n?: number }) => {
  try {
    const response = await client.get("api/post/top", {
      params: {
        n: info.n,
      },
    });
    // console.log("hot marketing data", response.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getHomePost = async () => {
  try {
    const response = await client.get("api/post/home");
    // console.log("home data", response.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
