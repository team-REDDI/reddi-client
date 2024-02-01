import client from "./client";

// 북마크 상태 토글
export const putBrandToggleBookmark = async (
  brandId: number,
  accessToken: string,
) => {
  try {
    const response = await client.put(
      `/api/brand/bookmark/toggle?brandId=${brandId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    console.log("Bookmark Toggle Response : ", response.data);

    return response.data.data.is_bookmarked;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const putMarketingToggleBookmark = async (
  postId: number,
  accessToken: string,
) => {
  try {
    const response = await client.put(
      `/api/brand/bookmark/toggle?postId=${postId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    console.log("Bookmark Toggle Response : ", response.data);

    return response.data.data.is_bookmarked;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
