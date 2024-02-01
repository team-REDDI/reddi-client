import client from "./client";
// API에서 북마크된 포스트 목록을 가져오는 함수
export const getBookmarkedMarketing = async (accessToken: string) => {
  try {
    const response = await client.get("/api/post/bookmark", {
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching bookmarked posts:", error);
    throw error;
  }
};
