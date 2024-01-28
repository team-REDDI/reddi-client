import client from "./client";

export const getBrandSearchResult = async (info: {
  keyword: string | null;
  size: number;
}) => {
  try {
    const response = await client.get("api/search/", {
      params: { keyword: info.keyword, size: info.size },
    });
    console.log("Brand Search Result", response.data.data.brands);
    return response.data.data.brands;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPostSearchResult = async (info: {
  keyword: string | null;
  size: number;
}) => {
  try {
    const response = await client.get("api/search/", {
      params: { keyword: info.keyword, size: info.size },
    });
    console.log("Marketing Search Result", response.data.data.posts);
    return response.data.data.posts;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getHotPostSearch = async () => {
  try {
    const response = await client.get("api/search/hot-post");
    console.log("marketing hot data:", response.data);
    return response.data.data.posts;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
