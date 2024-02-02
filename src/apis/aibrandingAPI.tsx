import client from "./client";
export const postAIBranding = async ({
  info,
  accessToken,
}: {
  info: {
    element: string;
    atmos: string;
    industry: string;
    target: string;
    similar: string;
  };
  accessToken: string;
}) => {
  try {
    console.log("INFO:", info, accessToken);
    const response = await client.post(
      "api/chat-gpt/question",
      {
        elements: info.element,
        atmospheres: info.atmos,
        industries: info.industry,
        targets: info.target,
        similarServices: info.similar,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );
    console.log("AIBrandingResult", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const putAIBranding = async (id: number, accessToken: string) => {
  try {
    const response = await client.put(
      `/api/chat-gpt/save?id=${id}`,
      {
        params: { id },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
