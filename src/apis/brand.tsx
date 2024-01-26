import client from "./client";

export const getBrandList = async (params: { page: number; size: number }) => {
  try {
    const response = await client.get("api/brand/", {
      params: {
        page: params.page,
        size: params.size,
      },
    });
    console.log("brand list data", response.data);
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
    console.log(response.data);
    return response.data.data.content;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

//brand/detail 페이지 상단 정보
export const getBrandDetailInfo = async (pageId: number) => {
  try {
    const response = await client.get(`/api/brand/${pageId}`, {
      params: {
        id: pageId,
      },
    });
    return response.data.data.brand;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getBrandDetailMarketing = async (pageId: number) => {
  try {
    const response = await client.get(`/api/brand/${pageId}`, {
      params: {
        id: pageId,
      },
    });
    return response.data.data.postIds;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const getBrandViewCount = async (pageId: number) => {
  try {
    const response = await client.get(`/api/brand/viewCount/${pageId}`, {
      params: {
        brand_id: pageId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
