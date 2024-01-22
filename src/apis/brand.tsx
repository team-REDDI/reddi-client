import client from "./client";

export const getBrandList = async (params: { page: number; size: number }) => {
  try {
    const response = await client.get("api/brand/", {
      params: {
        page: params.page,
        size: params.size,
      },
    });
    console.log("data", response.data);
    return response.data.data.content;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getBrandDetail = async (pageId: number) => {
  try {
    const response = await client.get(`/api/brand/${pageId}`, {
      params: {
        id: pageId,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
