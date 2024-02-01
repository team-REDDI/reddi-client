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

export const getBookmarkedBrand = async (accessToken: string) => {
  try {
    const response = await client.get("/api/brand/bookmark", {
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

export const getCreatedAIBrand = async (accessToken: string) => {
  try {
    const response = await client.get("/api/chat-gpt/", {
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log("생성된 AI brand: ", response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching created AI brand:", error);
    throw error;
  }
};

export const getCreatedAIPrompt = async (
  accessToken: string,
  promptId: number,
) => {
  try {
    const response = await client.get("/api/chat-gpt/prompt", {
      params: { id: promptId },
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching created AI brand:", error);
    throw error;
  }
};
